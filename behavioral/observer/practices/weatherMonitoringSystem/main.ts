import { PhoneDisplay, TVDisplay, WatchDisplay } from './observer';
import { WeatherMonitoringSystemSubject } from './subject';

const weatherMonitoringSystem = new WeatherMonitoringSystemSubject();

//  Observer

const tvDisplay = new TVDisplay();
const phoneDisplay = new PhoneDisplay();
const watchDisplay = new WatchDisplay();

// Subscribe

const defaultTemp = 36;
const dayAffect = 5;
function randomTemperature(): number {
  return Math.ceil(Math.random() * 10) - 5 + defaultTemp;
}

weatherMonitoringSystem.addSubscribe(tvDisplay);
function weatherChange() {
  for (let i = 1; i <= dayAffect; i++) {
    const temp = randomTemperature();
    if (i % 2 == 0) {
      weatherMonitoringSystem.addSubscribe(phoneDisplay);
      weatherMonitoringSystem.unsubscribe(watchDisplay);
    } else {
      weatherMonitoringSystem.addSubscribe(watchDisplay);
      weatherMonitoringSystem.unsubscribe(phoneDisplay);
    }
    weatherMonitoringSystem.doChange(temp);
  }
}

weatherChange();
