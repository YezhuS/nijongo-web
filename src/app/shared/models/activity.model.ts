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

export interface ActivityLetterI {
  justLook: boolean;
  complexity: string;
  type: string;
}

export class ActivityLetter implements ActivityLetterI {
  justLook: boolean = false;
  complexity!: string;
  type!: string;

  constructor(input?: ActivityLetterI) {
    if (input) Object.assign(input);
    else {
      this.justLook = false;
      this.complexity = '';
      this.type = '';
    }
  }
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
