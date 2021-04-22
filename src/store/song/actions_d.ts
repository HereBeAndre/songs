export interface GenericAction<T> {
  type: string;
  payload: T;
}
