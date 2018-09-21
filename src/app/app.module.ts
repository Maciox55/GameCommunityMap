import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent} from './components/admin/admin.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component'
import {MatChipsModule} from '@angular/material/chips';
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
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  entryComponents: [LoginDialogComponent,AppComponent]
})
export class AppModule { }
