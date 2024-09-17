export interface IZustandProps<T> {
  (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean | undefined): void
}
