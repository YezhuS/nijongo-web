export interface ActivityI {
  btnR: ActivityBtnI;
  btnL: ActivityBtnI;
  title: string;
  resumePath: string;
  letterActPath: string;
  type: string;
}

interface ActivityBtnI {
  label: string;
  path: string;
}

export class Activity implements ActivityI {
  btnR!: ActivityBtnI;
  btnL!: ActivityBtnI;
  title!: string;
  resumePath!: string;
  letterActPath!: string;
  type!: string;

  constructor(input?: ActivityI) {
    if (input) Object.assign(input);
    else {
      this.btnR = {
        label: '',
        path: '',
      };
      this.btnL = {
        label: '',
        path: '',
      };
      this.title = '';
      this.resumePath = '';
      this.type = '';
    }
  }
}

export interface ActivityLayoutI {
  justLook: boolean;
  type: ActivityLayoutEnum;
}

export class ActivityLayout implements ActivityLayoutI {
  justLook!: boolean;
  type!: ActivityLayoutEnum;

  constructor(input?: ActivityLayoutI) {
    if (input) Object.assign(input);
    else {
      this.justLook = false;
      this.type = ActivityLayoutEnum.InputAnswer;
    }
  }
}

export enum ActivityLayoutEnum {
  InputAnswer,
  ChooseAnswer, // Future implementation
}
