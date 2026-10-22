export function filterNonNull(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null && value !== ''));
}
//# sourceMappingURL=object.js.map