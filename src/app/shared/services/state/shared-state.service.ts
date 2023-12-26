import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ActivityLetter} from '../../models/activity.model';

@Injectable()
export class SharedStateService {
  activity = new BehaviorSubject<ActivityLetter>(new ActivityLetter());
  getActivity$() {
    return this.activity.asObservable();
  }
  setActivity(value: ActivityLetter) {
    this.activity.next(value);
  }
}
