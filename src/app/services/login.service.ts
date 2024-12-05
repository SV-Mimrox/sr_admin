import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
  }

  //add model
  userlogin: Login = new Login();

   //Login
   postLogin() {
    return this.http.post(baseURL + 'Admin/Login', this.userlogin);
  }
}
