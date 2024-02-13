import {Injectable, inject} from '@angular/core';
import {MessageStateService} from '../state/message-state.service';
import {SnackbarI} from '../../model/snackbar.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class MessageFacadeService {
  private messageStateService = inject(MessageStateService);
  private snackBarService = inject(MatSnackBar);

  public getSnackbar$ = this.messageStateService.getSnackbar$();
  public setSnackbar(value: SnackbarI): void {
    this.messageStateService.setSnackbar(value);
  }

  public showSnackbar(value: SnackbarI): void {
    this.snackBarService.open(value.message, value.action, {
      duration: value.duration ?? 3000,
      verticalPosition: 'top',
    });
  }
}
