import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalesEntryService } from '../sales-entry.service';
import { Sales } from '../sales-entry.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sales-entry-search',
  templateUrl: './sales-entry-search.component.html',
  styleUrls: ['./sales-entry-search.component.css']
})
export class SalesEntrySearchComponent implements OnInit {
@ViewChild('getList') getList:NgForm|any;
  constructor(private salesService:SalesEntryService,
    private router:Router) { }
userid:number|any;
sales:Sales|any=null;
msg:string|any=null;
  ngOnInit(): void {
  }
  onSubmit(){
this.userid=this.getList.value.userid;
this.salesService.getByIdSalesEntry(this.userid).subscribe(
  (element:Sales)=>{
    if(element===null){
      console.log();
      this.msg="Sales id dosen't exist!"
      this.sales=null;
    }else{
      this.msg=null;
      this.sales=element;
      console.log(this.sales);
    }

    
  }
);
  }
  ondeleteSales(){
    let con=confirm('Are you sure?');
    if(con===true){
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
}
onEdit(){
localStorage.setItem('type', this.sales.salestype);
  this.salesService.editSales.next(this.sales);
  this.router.navigate(['home/editsales']);
}
}
