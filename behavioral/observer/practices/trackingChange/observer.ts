import { Observer } from './interface';
import { TrackingChangeSystem } from './subject';

export class EmailAlert implements Observer {
  alert(context: TrackingChangeSystem): void {
    console.log('this is a alert from email');
  }
}

export class FacebookAlert implements Observer {
  alert(context: TrackingChangeSystem): void {
    console.log(
      'this is a alert from facebook about the changes of',
      context.getName()
    );
  }
}
export class SlackAlert implements Observer {
  alert(context: TrackingChangeSystem): void {
    console.log('this is a alert from slack');
  }
}
