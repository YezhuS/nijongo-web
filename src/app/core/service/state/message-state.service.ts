import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MessageToast} from '../../model/message.model';
import {SnackbarI} from '../../model/snackbar.model';

@Injectable()
export class MessageStateService {
  private messageToast = new BehaviorSubject<MessageToast>(new MessageToast());
  getMessageToast$() {
    return this.messageToast.asObservable();
  }
  setMessageToast(value: MessageToast) {
    this.messageToast.next(value);
  }

  private snackbar = new BehaviorSubject<SnackbarI>({} as SnackbarI);
  getSnackbar$() {
    return this.snackbar.asObservable();
  }
  setSnackbar(value: SnackbarI) {
    this.snackbar.next(value);
  }
}
