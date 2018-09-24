import { Injectable } from '@angular/core';
import { UserStore } from '../models/userStore.model';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private link="http://localhost:55715";
    userInfo: UserStore = new UserStore(); 

  constructor(private userHttpClient: HttpClient) {
      this.getUsers();
   }

  getUsers(){
        this.userHttpClient.get(this.link+ '/api/user/all')
            .subscribe((x:Array<User>) => {this.userInfo.userList = x; console.log(this.userInfo.userList);
        });
    }

  public getAllUsers(): Observable<User[]>{
      // Returns Observable object:
      return this.userHttpClient.get<User[]>(this.link);
  }


  //add user
  registerUser(user: User){
    let  data =  {
        FullName: user.FullName,
        Id: user.ID,
        UserName:user.UserName,
        Gender: (user.Gender == 'male') ? false : true,
        Email:user.Email,
        Password:user.Password,
        UserRole: user.UserRole
     
    };
    const link = this.link + '/api/user/register';
  this.userHttpClient.post<boolean>(link ,JSON.stringify(data),{ headers: {"content-type": "application/json" }}).subscribe(()=>{
      alert('success')
  },
  ()=>{alert('failed')});
  }
}

