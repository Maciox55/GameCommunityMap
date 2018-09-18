import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent} from './components/admin/admin.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component'
const routes: Routes = [
  { path: 'crisis-center', component: MapComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'login',      component: LoginComponent },
  { path: '', component:MapComponent},
  { path: '**', component:MapComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  entryComponents: [LoginDialogComponent,AppComponent]
})
export class AppModule { }
