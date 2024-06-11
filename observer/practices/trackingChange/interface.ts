export interface Observer {
  alert(context: Subject): void;
}
export interface Subject {
  notify(): void;
  attach(observer: Observer): void;
  detach(observer: Observer): void;
}
