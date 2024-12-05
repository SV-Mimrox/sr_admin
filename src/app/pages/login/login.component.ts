import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Username: any;
  Password: any;

  submitted = false;
  loading = false;
  loginuser: any;
  mes: any;
  emailMessage: any;
  slrEmailMessage: any;
  passwordMessage: any;
  errorCount = 0;
  token: string | undefined;

  constructor(public loginservice: LoginService, private router: Router) {
    this.token = undefined;    
    let uId = localStorage.getItem('userId')
    if(uId!=null)
    {
      this.router.navigate(['/dashboard'])
    }
  }

  //check Email validation
  validateEmail(emailAddress: any) {
    var pattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var res = pattern.test(emailAddress);
    return res;
  }

  //check Mobile validation
  validateMobile(mobileNo: any) {
    var pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var res = pattern.test(mobileNo);
    return res;
  }

  //check Number validation
  containsOnlyNumbers(str: any) {
    return /^\d+$/.test(str);
  }

  //Login
  onSubmit(form: NgForm) {
    this.errorCount = 0;
    this.submitted = true;
    
    //Username Validation
    if (this.Username == undefined) {
      this.errorCount++;
      this.emailMessage = 'Please enter username';
    }
    else
    {
      if (this.Username.trim() == '') {
        this.errorCount++;
        this.emailMessage = 'Please enter valid username';
      }
      else
      {
        var isNumber = this.containsOnlyNumbers(this.Username);
        if (isNumber == true) {
          var validateMobile = this.validateMobile(this.Username);
          if (validateMobile == false) {
            this.errorCount++;
            this.emailMessage = 'Please enter valid mobile number';
          }
          else
          {
            this.emailMessage = '';
          }
        }
        else
        {
          var validateEmail = this.validateEmail(this.Username);
          if (validateEmail == false) {
            this.errorCount++;
            this.emailMessage = 'Please enter valid email';
          }
          else
          {
            this.emailMessage = '';
          }
        }
      }
    }
    
    //Password validation
    if (this.Password == undefined) {
      this.errorCount++;
      this.passwordMessage = 'Please enter password';
    }
    else
    {
      this.passwordMessage = '';
      if (this.Password.trim() == '') {
        this.errorCount++;
        this.passwordMessage = 'Please enter valid password';
      }
    }
    
    //Captcha validation
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
        this.errorCount++;
      }
    }
    
    if (this.errorCount == 0) {
      this.loginservice.userlogin.Username = this.Username;
      this.loginservice.userlogin.Password = this.Password;
      if (this.loading == false) {
        this.loading = true;
        
        //Login service
        this.loginservice.postLogin().subscribe({
          next: (data: any) => {
            this.mes = '';
            this.loginuser = data;
            if (this.loginuser.responseMessage != 'Success') {
              this.mes = this.loginuser.responseMessage;
              this.loading = false;
            }
            else
            {
              this.loading = false;
              localStorage.setItem('user',this.loginuser.name)
              localStorage.setItem('userId',this.loginuser.id)
              localStorage.setItem('loginToken',this.loginuser.token)
              this.loginservice.userlogin.Username = '';
              this.loginservice.userlogin.Password = '';
              this.router.navigate([environment.dashboard])
            }
          },
        });
      }
    }
  }
}
