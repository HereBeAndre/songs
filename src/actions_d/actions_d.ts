export interface SimpleAction {
  type: string;
}

export interface GenericAction<T> {
  type: string;
  payload: T;
}
