import { WeatherMonitoringSystemSubject } from './subject';

export interface ISubject {
  addSubscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notifySubscribe(): void;
}
export abstract class IObserver {
  abstract notify(weatherObject: WeatherMonitoringSystemSubject): void;
  constructor(private name: string) {}
  getName(): string {
    return this.name;
  }
}
