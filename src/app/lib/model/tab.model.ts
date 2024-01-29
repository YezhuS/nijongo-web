export interface TabI<T> {
  title: string;
  content: T;
  disabled?: boolean;
  itemClass?: string;
}
