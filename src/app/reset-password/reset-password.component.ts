import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginSrevice } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private loginservice:LoginSrevice,
    private router:Router, 
    private route:ActivatedRoute,
    private service:SharedService) { }
    @ViewChild('resetForm')  resetForm:NgForm|any;
    @ViewChild(HeaderComponent) headerComp:HeaderComponent|any;
  newpassword:string|any;
  repassword:string|any;
  oldpassword:string|any;
  msg:string|any;
  userid:any;
  password:string|any;
  ngOnInit(): void {
    
    this.loginservice.loginmodel.subscribe(
      data=>{
            this.userid=data.userid;
            this.password=data.password;
            localStorage.setItem('userid', this.userid);
            localStorage.setItem('password', this.password);
      }
    );
   
  }
  onSubmit(){
    let data:any|null = localStorage.getItem('userid');
    const id:any=+data;
 
    this.newpassword=this.resetForm.value.newpassword;
    this.oldpassword=this.resetForm.value.oldpassword;
    this.repassword=this.resetForm.value.repassword;
    console.log(localStorage.getItem('password'));
    
    if(this.oldpassword!== 'admin'){
     
     
      this.msg="Old password is wrong!";
      this.router.navigate(['createPassword']);
      this.resetForm.reset();
    }else if(this.newpassword!==this.repassword){
      
      this.msg=" New Password id differ from the re-entered password! ";
      this.resetForm.reset();
      this.router.navigate(['createPassword']);
    }else{
      
     
        this.loginservice.updatePassword(id, this.newpassword).subscribe(
          element=>{
          
            sessionStorage.clear();
            localStorage.clear();
            this.loginservice.logout.next(false);
            alert("Password Updated Successfully");
            this.router.navigate(['login']);
          }
        );
      
      
    }

}
onCancel(){
  this.resetForm.reset();
}
}
