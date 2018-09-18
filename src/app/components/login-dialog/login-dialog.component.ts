import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData{
  login: string;
  password:string;
  keyPhrase:string;
}


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})

export class LoginDialogComponent {

  constructor( public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
    onSubmit(): void {
      this.dialogRef.close();
    }
    onClose():void{
      this.dialogRef.close();
    }

}
