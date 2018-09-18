import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';


export interface DialogData{
  login: string;
  password:string;
  keyPhrase:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }
  keyPhrase:string;


  openDialog():void{
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
      data: {login: "test", password: "test"}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.keyPhrase = result;
    });
  }




  title = 'SCUMMap';
}
