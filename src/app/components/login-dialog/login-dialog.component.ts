import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgModel } from '@angular/forms';

export interface DialogData{
  login: string;
  password:string;
  keyPhrase:string;
}
export class inputData{
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
  isRegistered = false;

  constructor( public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
    onSubmit(model:any): void {
      console.log(model);
      this.dialogRef.close(model);
    }
    onClose():void{
      this.dialogRef.close();
    }

}
