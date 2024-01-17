import {LifeMessageEnum, SeverityMessageEnum} from '../enum/message.enum';

export interface MessageToastI {
  severity: SeverityMessageEnum;
  summary: string;
  detail: string;
  life?: LifeMessageEnum;
}

export class MessageToast implements MessageToastI {
  severity!: SeverityMessageEnum;
  summary!: string;
  detail!: string;
  life?: LifeMessageEnum;

  constructor(input?: MessageToastI) {
    if (input) Object.assign(input);
    else {
      this.severity = SeverityMessageEnum.info;
      this.summary = '';
      this.detail = '';
    }
  }
}
