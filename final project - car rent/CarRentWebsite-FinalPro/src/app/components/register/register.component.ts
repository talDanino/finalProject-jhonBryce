import { Component, OnInit } from '@angular/core';

import { Register } from '../../models/register.model';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { UserStore } from '../../models/userStore.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register: Register = new Register();
  public userStore:UserStore;
  public users: User[];
  public user = new User();
  public errorMessage: String;


  constructor(private myUserService:UsersService) { }

  ngOnInit() {
      this.userStore = this.myUserService.userInfo;
      console.log(this.myUserService.userInfo)
  }


  //add user
  public registerFunc(): void {

        this.user.UserRole = 0;
        this.myUserService.registerUser(this.user);
           

    }

   



}
