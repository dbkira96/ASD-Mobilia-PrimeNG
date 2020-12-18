import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { }
  
    username: string = "";
    password: string = "";

    isAuthenticate: Boolean = false;

    ngOnInit() {
    }
    doLogin() {
      this.authService.authenticate(this.username, this.password).subscribe(
        response => {
          
          if(response!=null) {
            sessionStorage.setItem("user", this.username);
            this.isAuthenticate = true;
            this.route.navigate(['home', this.username]);
        }
        else {
            this.isAuthenticate = false;
            this.messageService.add({key: 'tc', severity:'error', summary: 'Error', detail: 'Bad username or password'});
          }
        }
      )
    }

    doLoginStub() {
      sessionStorage.setItem("user", this.username);
      sessionStorage.setItem("user_roles","['ROLE_USER','ROLE_ADMIN']")
      this.isAuthenticate = true;
      this.route.navigate(['home']);
      
    }
}
