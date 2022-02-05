import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';


import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { LoginSrevice } from './login.service';
import { Officer } from '../shared/officer.model';
import { User } from '../shared/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {
 @ViewChild('loginForm') loginForm:NgForm|any;

  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private service:SharedService,
    private loginService:LoginSrevice) { }


    userid:any;
    password:string='';
    loginMsg='';
    user:any;
    branch_id: any;
userCheck:any;
  ngOnInit(): void {

  }
 
  onSubmit(){
    this.userid=this.loginForm.value.userid;
  this.password=this.loginForm.value.password;
  this.loginService.login(this.userid, this.password).subscribe(
      element=>{
       
     
        if(element===null){
          this.loginMsg="Incorrect Username or password!"
          this.loginForm.reset();
          this.router.navigate(['login']);

        }else {


          if(element.password==='admin'){
            this.userCheck=element;
            
            this.loginService.loginmodel.next(this.userCheck);
            
            this.router.navigate(['/createPassword']);
          }else{
            sessionStorage.setItem('userid',element.userid+'');
            sessionStorage.setItem('password',element.password+'');
            this.loginService.getUser(this.userid).subscribe(
              data=>{

                this.user=data;
                let name:string=this.user.officerName;
                let usertype:string=element.usertype;
                console.log("usertype => "+usertype);
                if(usertype==='Admin'){
                  sessionStorage.setItem('admin','true');
                }else{
                  sessionStorage.setItem('admin','false');
                }
                sessionStorage.setItem('name',name);
                this.loginService.logout.next(true);
                this.loginService.officer.next(this.user);
               
                
                sessionStorage.setItem('validate','true')
                this.router.navigate(['home']);
              }
            );
            
          }
        }
       

      }
  );
    
   
  }
  onCancel(){
this.loginForm.reset();
  }
  

}
