import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthed: any;
  readonly ROOT_URL = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  // register(data:any){
  //   this.http.post(this.ROOT_URL+'/api/register',data).subscribe(res:Response =>{
  //     if(res.status === 200){
  //       var resp = <Token>res.json();
  //       localStorage.setItem("token",resp.token);
  //       this.user.setToken(resp.token);
  //       localStorage.setItem("username",resp.username);
  //       console.log(resp.token);
  //       this.user.setUserAuthed(resp.auth);
  //       console.log("Auth at login " + resp.auth);
  //       this.router.navigate(['/dashboard']);

  //     }
  //  },error =>{
  //     console.log(error);
  //  });

  // }

  login(data:any){
    
  }

}
    interface Token{
      token:string;
      auth:boolean;
      username:string;
      role:string;
     }
