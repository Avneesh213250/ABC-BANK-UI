import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  admin:any;
  ngOnInit(): void {
    if(sessionStorage.getItem('admin')!==null){
    this.admin=sessionStorage.getItem('admin');
    console.log("this.admin    =  "+this.admin);
    
    }
  }

}
