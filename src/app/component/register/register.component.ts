import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Profile } from 'src/app/domain/Profile';
import { User } from 'src/app/domain/User';
import { Account } from '../../domain/Account';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})

export class RegisterComponent implements OnInit {

  isAuthenticate: Boolean = false;
  constructor(
    private route: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { }
  // newAccount= new Account(new User("admin","admin@mobilia.com","admin"),new Profile("DIO","Brando","MALE","KONODIODA","M",new Date(),0,"../../assets/images/dio.jpg"),"EMPLOYEE"); 
  newAccount = new Account(new User(), new Profile("", "", "", "", ""));
  types: string[] = ["ADMIN", "CLERK", "EMPLOYEE"];

  ngOnInit() {
  }

  onClose() {
    this.route.navigate(['home']);
  }
  registerUser() {
    this.authService.register(this.newAccount).subscribe(
      response => {
        console.log(response);
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'User successfully registered' });


      }
    )
  }


}
