import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Comic } from '../../core/comics-interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [
  ]
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.data;
  }

  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
