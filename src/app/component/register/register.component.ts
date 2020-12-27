import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Account } from '../../domain/Account';
import { Profile } from '../../domain/Profile';
import { User } from '../../domain/User';
import { AuthService } from '../../services/auth.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



interface Gender {
  name: string,
  code: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[MessageService]
})



export class RegisterComponent implements OnInit {

  genders: Gender[];
  selectedGender: string;


  constructor(
    private route: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.genders = [
      {name: 'Female', code: 'FEMALE'},
      {name: 'Male', code: 'MALE'}
      
  ];

   }
    
    newAccount= new Account(new User("admin","admin@mobilia.com","admin"),new Profile("DIO","Brando","MALE","KONODIODA","M",new Date(),0,"../../assets/images/dio.jpg"),"EMPLOYEE"); 
    //newAccount= new Account(new User("","",""),new Profile("","","","","",new Date(),0,""),"EMPLOYEE"); 
    isAuthenticate: Boolean = false;

    

    ngOnInit() {
    }
    onClose(){
      this.route.navigate(['home']);
    }
    registerUser() {
        this.newAccount.type="EMPLOYEE"
        this.authService.register(this.newAccount).subscribe(
          response=>{
            console.log(response);
            this.messageService.add({key: 'tc', severity:'success', summary: 'Service Message', detail: 'User successfully registered'});
           

          }
        )
    }

   
}
