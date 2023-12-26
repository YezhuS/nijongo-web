import {Injectable, inject} from '@angular/core';
import {SharedStateService} from '../state/shared-state.service';
import {ActivityLetter} from '../../models/activity.model';

@Injectable()
export class SharedFacadeService {
  private state = inject(SharedStateService);

  activity$ = this.state.getActivity$();
  setActivity(value: ActivityLetter) {
    this.state.setActivity(value);
  }
}
