import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import {AuthService} from './services/auth.service';
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

  constructor(public dialog: MatDialog, public auth: AuthService) { }
  


  openDialog():void{
    const dialogRef = this.dialog.open(LoginDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log("Result on APP Component"+result);
    });
  }




  title = 'SCUMMap';
}
