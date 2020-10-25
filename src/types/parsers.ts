export interface IParser<T> {
    <F>(value: unknown, fallbackValue: F, property?: string, logError?: boolean): T | F;
}

export interface ITypeGuard<T> {
    (value: unknown): value is T;
}
