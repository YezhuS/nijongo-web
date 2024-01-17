import {Injectable, inject} from '@angular/core';
import {MessageService} from 'primeng/api';
import {MessageStateService} from '../state/message-state.service';
import {MessageToast} from '../../model/message.model';

@Injectable()
export class MessageFacadeService {
  private messageService = inject(MessageService);
  private messageStateService = inject(MessageStateService);

  public getMessageToast$ = this.messageStateService.getMessageToast$();
  public setMessageToast(value: MessageToast): void {
    this.messageStateService.setMessageToast(value);
  }

  public showToast(value: MessageToast): void {
    this.messageService.add(value);
  }
}
