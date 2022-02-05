import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { LoginSrevice } from '../login/login.service';
import { Officer } from '../shared/officer.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:SharedService,
  private router:Router,
  private loginService:LoginSrevice) { }


  username:string|null=null;
  role:string|null=null
  nexFlag=false;
  ngOnInit(): void {

    
    
    if(sessionStorage.getItem('name')!==null){
      this.username= sessionStorage.getItem('name');
      console.log("user   "+this.username)
      if(sessionStorage.getItem('admin')==='true'){
        this.role='Admin';
      }else{
        this.role='Officer';
      }

      this.loginService.logout.subscribe(
        data=>{
          if(data===false){
            this.username=null;
          }
        }
      );
   }
   this.loginService.officer.subscribe(
      (data:Officer)=>{
        this.username=data.officerName;
        console.log(data);
        if(sessionStorage.getItem('admin')==='true'){
          this.role='Admin';
        }else{
          this.role='Officer';
        }
        this.loginService.logout.subscribe(
          data=>{
            if(data===false){
              this.username=null;
            }
          }
        );
      }
    );
    
  }
 
  logout(){
    this.username=null;
    sessionStorage.setItem('admin', 'false');
    sessionStorage.clear();
    localStorage.clear();

this.router.navigate(['login']);
  }


}
