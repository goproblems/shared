import {rmSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import ts from 'typescript';

const diagnosticHost = {
    getCanonicalFileName: filename => filename,
    getCurrentDirectory: ts.sys.getCurrentDirectory,
    getNewLine: () => ts.sys.newLine,
};

const reportDiagnostics = diagnostics => {
    if (diagnostics.length) {
        process.stderr.write(ts.formatDiagnosticsWithColorAndContext(diagnostics, diagnosticHost));
    }
    if (diagnostics.some(diagnostic => diagnostic.category === ts.DiagnosticCategory.Error)) {
        process.exit(1);
    }
};

// Keep inferred hook exports as `typeof api.useXxx` instead of expanding their generics.
const preserveHookReferences = context => sourceFile => {
    const declaredValues = new Set(sourceFile.statements
        .filter(ts.isVariableStatement)
        .flatMap(statement => statement.declarationList.declarations)
        .filter(declaration => ts.isIdentifier(declaration.name))
        .map(declaration => declaration.name.text));

    const visit = node => {
        if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && /^use[A-Z]/.test(node.name.text)) {
            const binding = ts.getOriginalNode(node.name).parent;
            const sourceDeclaration = binding?.parent?.parent;
            const property = binding?.propertyName ?? binding?.name;

            if (binding && ts.isBindingElement(binding) && !binding.initializer && !binding.dotDotDotToken &&
                sourceDeclaration && ts.isVariableDeclaration(sourceDeclaration) && !sourceDeclaration.type &&
                sourceDeclaration.initializer && ts.isIdentifier(sourceDeclaration.initializer) &&
                declaredValues.has(sourceDeclaration.initializer.text) && property && ts.isIdentifier(property)) {
                return context.factory.updateVariableDeclaration(
                    node,
                    node.name,
                    node.exclamationToken,
                    context.factory.createTypeQueryNode(context.factory.createQualifiedName(
                        context.factory.createIdentifier(sourceDeclaration.initializer.text),
                        property.text,
                    )),
                    node.initializer,
                );
            }
        }
        return ts.visitEachChild(node, visit, context);
    };

    return ts.visitNode(sourceFile, visit);
};

const config = ts.getParsedCommandLineOfConfigFile(
    fileURLToPath(new URL('../tsconfig.build.json', import.meta.url)),
    {},
    {...ts.sys, onUnRecoverableConfigFileDiagnostic: diagnostic => reportDiagnostics([diagnostic])},
);
reportDiagnostics(config.errors);
const program = ts.createProgram(config.fileNames, config.options);
reportDiagnostics(ts.getPreEmitDiagnostics(program));
rmSync(new URL('../dist', import.meta.url), {recursive: true, force: true});
const result = program.emit(undefined, undefined, undefined, false, {
    afterDeclarations: [preserveHookReferences],
});
reportDiagnostics(result.diagnostics);
if (result.emitSkipped) process.exit(1);
