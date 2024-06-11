import { EmailAlert, FacebookAlert, SlackAlert } from './observer';
import { TrackingChangeSystem } from './subject';

const systemTracking = new TrackingChangeSystem('Hệ thống bán diêm');

const emailAlertSystem = new EmailAlert();
const facebookAlertSystem = new FacebookAlert();
const slackAlertSystem = new SlackAlert();

systemTracking.attach(emailAlertSystem);
systemTracking.attach(facebookAlertSystem);

systemTracking.doChange();
systemTracking.detach(emailAlertSystem);
systemTracking.doChange();

// Some logic
