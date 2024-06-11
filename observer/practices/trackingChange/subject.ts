import { Observer, Subject } from './interface';
export class TrackingChangeSystem implements Subject {
  private _name: string;
  private _subscribers: Observer[] = [];
  notify(): void {
    for (const sub of this._subscribers) {
      sub.alert(this);
    }
  }
  attach(observer: Observer): void {
    this._subscribers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIndex = this._subscribers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this._subscribers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }
  doChange() {
    this.notify();
  }
  getName(): string {
    return this._name;
  }
  constructor(name: string) {
    this._name = name;
  }
}
