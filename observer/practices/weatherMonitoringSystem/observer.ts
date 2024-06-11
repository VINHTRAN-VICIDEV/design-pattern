import { IObserver } from './interface';
import { WeatherMonitoringSystemSubject } from './subject';

export class PhoneDisplay extends IObserver {
  notify(weatherObject: WeatherMonitoringSystemSubject): void {
    console.log(
      'This is a alert from PhoneDisplay',
      'The temperature today is',
      weatherObject.getTemperature()
    );
  }
  constructor(name: string = 'Phone') {
    super(name);
  }
}

export class TVDisplay extends IObserver {
  notify(weatherObject: WeatherMonitoringSystemSubject): void {
    console.log(
      'This is a alert from TVDisplay',
      'The temperature today is',
      weatherObject.getTemperature()
    );
  }
  constructor(name: string = 'TV') {
    super(name);
  }
}
export class WatchDisplay extends IObserver {
  notify(weatherObject: WeatherMonitoringSystemSubject): void {
    console.log(
      'This is a alert from WatchDisplay',
      'The temperature today is',
      weatherObject.getTemperature()
    );
  }
  constructor(name: string = 'Watch') {
    super(name);
  }
}
