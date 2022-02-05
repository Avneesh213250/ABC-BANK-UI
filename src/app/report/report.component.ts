import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesEntryService } from '../sales-entry/sales-entry.service';
import { Sales } from '../sales-entry/sales-entry.model';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('getList') getList:any;
  constructor(private salesService:SalesEntryService,
    private router:Router) { }
userid:any;
sales:any=null;
msg:any=null;
salesList:any=null;
officerList:any;

  ngOnInit(): void {
    this.salesService.getAllOfficer().subscribe(
      element=>{
         
         
       
          this.officerList=element;
        
        
      }
    );
  }
  onSubmit(){

this.userid=this.getList.value.officerid;

this.salesService.getByOfficerSalesEntry(this.userid).subscribe(


    (element:Sales[])=>{
      if(element===null){
        this.msg='No Record found';
        console.log(this.msg);
        this.salesList=null;
      }else{
        this.msg=null;
      this.salesList=element;
      console.log(this.salesList);
      }
    }
  );
  }
  ondeleteSales(){
    
    this.salesService.deleteById(this.sales.id).subscribe(
      data=>{
        console.log(data+ 'deleted');
        this.salesService.getByIdSalesEntry(this.userid).subscribe(
          (element:Sales)=>{
              this.sales=element;
              console.log(this.sales);
            }
        
        );
        this.router.navigate(['home/searchSales']);
        
      }
    );
}
onEdit(){
localStorage.setItem('type', this.sales.salestype);
  this.salesService.editSales.next(this.sales);
  this.router.navigate(['home/editsales']);
}
}