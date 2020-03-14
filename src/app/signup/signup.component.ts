import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedFiles: FileList;
   
  constructor(private userservice:UserService,private router:Router) { }
  user : User=new User();  
  submitted = false;  
  
  ngOnInit() {
    var id = window.localStorage.getItem("edit-id");
    if (id != null && id != "") {
      this.userservice.findOneInAll6(parseInt(id))
        .subscribe(data => {
         this.user = data;
          this.usersaveform.setValue(this.user)
        }); 
    this.submitted=false;
  }
}
selectFile(event) {  
  const file = event.target.files.item(0);  
 
  if (file.type.match('image.*')) {  
    var size = event.target.files[0].size;  
    if(size > 1000000)  
    {  
        alert("size must not exceeds 1 MB");  
        this.usersaveform.get('profileImage').setValue("");  
    }  
    else  
    {  
      this.selectedFiles = event.target.files;  
    }  
  } else {  
    alert('invalid format!');  
  }  

}     

  usersaveform=new FormGroup({ 

    id:new FormControl('' , [Validators.required , Validators.minLength(2) ]),
    userName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    email:new FormControl('',[Validators.required,Validators.email]),  
    mobileNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    password:new FormControl(),
    confirmed:new FormControl(),
    userType:new FormControl(),
    profileImage:new FormControl(),

    });  
  
  saveUser(saveUser){ 
    
     
    this.user=new User();  
    this.user.id=this.Id.value;  
    this.user.userName=this.UserName.value;  
    this.user.email=this.Email.value;  
    this.user.userType='user';  
    this.user.confirmed='no';
    this.user.mobileNumber=this.MobileNumber.value;
    this.user.password=this.Password.value;
    this.user.profileImage=this.ProfileImage.value;
     this.submitted=true;
    this.save();  
  
} 
  save() {  
    this.userservice.saveUser(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new User(); 
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['userlist']) 
  }  

  get UserName(){  
    return this.usersaveform.get('userName');  
  }  
  get Email(){  
    return this.usersaveform.get('email');  
  }  
  get UserType(){  
    return this.usersaveform.get('userType');  
  }  
  
  get Id(){  
    return this.usersaveform.get('id');  
  }  
  get Confirmed(){  
    return this.usersaveform.get('confirmed');  
  }  
  get MobileNumber(){  
    return this.usersaveform.get('mobileNumber');  
  }  
  get Password(){  
    return this.usersaveform.get('password');  
  } 
  get ProfileImage(){  
    return this.usersaveform.get('profileImage');  
  }  
  
  saveUserForm(){  
    this.submitted=false;  
    this.usersaveform.reset();  
  } 
}
