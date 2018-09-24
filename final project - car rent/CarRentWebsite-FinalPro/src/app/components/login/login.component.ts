import { Component } from '@angular/core';
import { UserStore } from '../../models/userStore.model';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
    userStore: UserStore;
    public user = new User();

      
  constructor(private myUserService:UsersService) { }


  public loginFunc() :void{
    this.userStore = this.myUserService.userInfo;
    console.log(this.myUserService.userInfo);
    const result = this.userStore.userList.find(x => (x.UserName === this.user.UserName) &&(x.Password === this.user.Password)) ;
    console.log(result)

    if (result != undefined){
       
        console.log('user is ok');
    }
   

  }

  

}
