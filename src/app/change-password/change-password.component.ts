import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginSrevice } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private loginservice:LoginSrevice,
    private router:Router, 
    private route:ActivatedRoute,
    private service:SharedService) { }
    @ViewChild('resetForm')  resetForm:NgForm|any;
    @ViewChild(HeaderComponent) headerComp:HeaderComponent|any;
  newpassword:string ="";
  repassword:string ="";
  oldpassword:string ="";
  msg:string ="";
  userid:any| null;
  password:string|null="";
  ngOnInit(): void {
    let data = sessionStorage.getItem('userid');
   let pass = sessionStorage.getItem('password');
    if(data!==null){
      this.userid=+data;
      this.password=pass;
    }
  }
  onSubmit(){
    
 
    this.newpassword=this.resetForm.value.newpassword;
    this.oldpassword=this.resetForm.value.oldpassword;
    this.repassword=this.resetForm.value.repassword;
    if(this.oldpassword!== this.password){
     
      this.msg="Old password is wrong!";
      this.resetForm.reset();
      this.router.navigate(['home/chamgePass']);
    }else if(this.newpassword!==this.repassword){
      
      this.msg=" New Password id differ from the re-entered password! ";
      this.resetForm.reset();
      this.router.navigate(['home/chamgePass']);
    }else{
      
      
        this.loginservice.updatePassword(this.userid, this.newpassword).subscribe(
          element=>{
            sessionStorage.clear();
            localStorage.clear();
            this.loginservice.logout.next(false);
           
            this.router.navigate(['login']);
          }
        );
      
      
    }

}
onCancel(){
  this.resetForm.reset();
}
close(){
  this.router.navigate(['home']);
}
}
