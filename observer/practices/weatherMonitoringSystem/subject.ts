import { IObserver, ISubject } from './interface';

export class WeatherMonitoringSystemSubject implements ISubject {
  private _subscribers: IObserver[] = [];
  private _temperature: number = 0;
  addSubscribe(observer: IObserver): void {
    const observerIndex = this._subscribers.findIndex((sub) => sub == observer);
    if (observerIndex != -1) {
      console.log(observer.getName(), 'device has subscribed');
      return;
    }

    this._subscribers.push(observer);
    console.log(observer.getName(), 'subscribe the weather monitoring system');
    return;
  }
  unsubscribe(observer: IObserver): void {
    const observerIndex = this._subscribers.findIndex((sub) => sub == observer);
    if (observerIndex == -1) {
      console.log(observer.getName(), 'has no subscribed');
      return;
    }
    this._subscribers.splice(observerIndex, 1);
    console.log(observer.getName(), 'unsubscribe successfully');
  }
  notifySubscribe(): void {
    for (const sub of this._subscribers) {
      sub.notify(this);
    }
  }
  getTemperature(): number {
    return this._temperature;
  }
  doChange(newTemperature: number): void {
    this._temperature = newTemperature;
    this.notifySubscribe();
  }
}
