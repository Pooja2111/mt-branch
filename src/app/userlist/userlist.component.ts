import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  constructor(private userservice: UserService,private router: Router) { }
  isupdated: boolean;
  userlist: Observable<User[]>;
  ngOnInit() {
    
    this.userservice.getAllUser().subscribe(data => {
      this.userlist = data;
     })
  }
  deleteUser(user:User)
{
   this.userservice.deleteUser(user.id).subscribe(data=>{
   this.userservice.getAllUser().subscribe(data=>{this.userlist=data;});
  });
  }
  updateUser(user : User ) {
    window.localStorage.removeItem("edit-id");
    window.localStorage.setItem("edit-id", user.id.toString());
    this.router.navigate(['signup']);
    }
}