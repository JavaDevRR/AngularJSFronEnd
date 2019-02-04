import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login/login-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName= "test";
  passsword="test" ;
  user;
  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit() {
  }
  login() {
   /* this.user=  JSON.stringify({
      user: this.userName,
      password: this.passsword

    })
    ; */
      console.log()
    this.loginService.authenticateUser(new User(this.userName, this.passsword)).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        //this.router.navigate('welcome', data);


      },
      error => {

        console.log("Error", error);

      }
    );
  }
}

export class User {
  constructor(private user: string, private password: string) {
  
  }
}
