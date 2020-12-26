import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
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


  


  constructor(
    private route: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { }
  // newAccount= new Account(new User("admin","admin@mobilia.com","admin"),new Profile("DIO","Brando","MALE","KONODIODA","M",new Date(),0,"../../assets/images/dio.jpg"),"EMPLOYEE"); 
  newAccount= new Account(new User("","",""),new Profile("","","","",""),"EMPLOYEE"); 
  isAuthenticate: Boolean = false;



  ngOnInit() {
   
  }

 

  
  onClose() {
    this.route.navigate(['home']);
  }
  registerUser() {
    this.newAccount.type = "EMPLOYEE"
    // this.newAccount.profileDto.surname=
    this.authService.register(this.newAccount).subscribe(
      response => {
        console.log(response);
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'User successfully registered' });


      }
    )
  }


}
