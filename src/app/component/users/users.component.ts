import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/User'
import { UserDataService } from '../../services/data/UserData.service'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UserDataService, MessageService, ConfirmationService]
  })
  export class UsersComponent implements OnInit {
    userDialog: boolean;
    users: User[] = [];
    user: User = { };
    selectedSub: string;
    submitted: boolean;
    search = "";
    newuser:boolean;
    types: string[] = ["ADMIN", "CLERK", "EMPLOYEE"];
    error;
    
  
  
    update: boolean;
  
    constructor(
      private userData: UserDataService,
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
      private route:Router
    ) { }
  

    getAll(){

      this.userData.getAllUsers()
      .subscribe(res=>{
        this.users=res;
      },err=>this.error=err
      );
    }
    
      ngOnInit(): void {
        this.getAll(); 
      }

      editUser(user: User) {
    
        this.user = { ...user };
        this.userDialog = true;
        this.newuser=false;
        this.update = true;
    
      }

      updateUser() {
          
          this.userData.update(this.user).subscribe(
            response => {
              this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'user updated' });
            },
            err => {
              this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Error updating the user' });
            }
          );
        
      }

      deleteUser(user: User) {
        this.userData.delete(user.id).subscribe(
          response => {
            this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'user deleted' });
          },
          err => {
            this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Error deleting the user' });
          }
        )
      }

      hideDialog() {
        this.userDialog = false;
      }
    
      refresh(): void {
        window.location.reload();
      }
    
      //  ???
      findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].username === id) {
            index = i;
            break;
          }
        }
    
        return index;
      }
    
      onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
  
      readUrl(event:any){
        const reader=new FileReader();
        if(event.target.files && event.target.files.length){
          const [file] = event.target.files;
          reader.readAsDataURL(file);
          
        }
    
      }

      redirect(target:string){
        this.route.navigate([target])
      }
  }
  