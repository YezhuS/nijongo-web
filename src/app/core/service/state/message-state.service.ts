import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MessageToast} from '../../model/message.model';

@Injectable()
export class MessageStateService {
  private messageToast = new BehaviorSubject<MessageToast>(new MessageToast());
  getMessageToast$() {
    return this.messageToast.asObservable();
  }
  setMessageToast(value: MessageToast) {
    this.messageToast.next(value);
  }
}
