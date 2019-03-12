import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { User } from 'src/app/_models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
  }

  submit(user: User) {
    this.usersService.postUser(user)
    .subscribe(
      (data: User) => {
        console.log(data) 
      }
    ) 
  }

}
