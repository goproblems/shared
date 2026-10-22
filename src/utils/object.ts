export function filterNonNull<T extends object>(
    obj: T
): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => value != null && value !== '')
    ) as Partial<T>;
}
