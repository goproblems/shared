export type RectangleArea = {
    min: string;
    max: string;
};
export type ScenarioMetadata = {
    version: number;
    targetPositions: string[];
    playerAllowedAreas: RectangleArea[];
    playerDisallowedAreas: RectangleArea[];
    computerAllowedAreas: RectangleArea[];
    computerDisallowedAreas: RectangleArea[];
    configOverrides: Record<string, unknown>;
    targetGoal?: 'live' | 'kill';
};
export declare const emptyScenarioMetadata: () => ScenarioMetadata;
export type ScenarioMetadataAreaField = 'playerAllowedAreas' | 'playerDisallowedAreas' | 'computerAllowedAreas' | 'computerDisallowedAreas';
export type ScenarioConfigOverrideDef = {
    key: string;
    label: string;
    type: 'number' | 'boolean';
    defaultValue: number | boolean;
    description?: string;
    step?: number;
};
export declare const SCENARIO_CONFIG_OVERRIDE_DEFS: ScenarioConfigOverrideDef[];
//# sourceMappingURL=scenarioMetadata.d.ts.map