import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CreditCard } from './creditCart.model';
import { Insurence } from './insurence.model';
import { SalesEntryService } from './sales-entry.service';
import { Sales } from './sales-entry.model';

@Component({
  selector: 'app-sales-entry',
  templateUrl: './sales-entry.component.html',
  styleUrls: ['./sales-entry.component.css']
})
export class SalesEntryComponent implements OnInit {

  @ViewChild('signUpForm') signUpForm:any;

  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private salesService:SalesEntryService) { }

    sales_typetest:string=''


customername:string='';
salestype:string='';
creditCardNum:any=null;
validity:Date=new Date();
insurence:any=null;
policy:string='';
matuityDate:Date=new Date();
createdDate:Date=new Date();
createdBy:string='';

ngOnInit(): void {
}
onSubmit(){

  let officername:any|null= sessionStorage.getItem('name');
  let id:any|null=sessionStorage.getItem('userid');
let officerid=+id;
  this.customername= this.signUpForm.value.customername;
 this.salestype=this.signUpForm.value.salestype;
 console.log(officername);
 
 this.creditCardNum=this.signUpForm.value.creditCardNum;
 this.validity=this.signUpForm.value.validity;
 this.insurence=this.signUpForm.value.insurence;
 this.policy=this.signUpForm.value.policy;
 this.matuityDate= this.signUpForm.value.matuityDate;
 let creditCard:any= null;
 let insurenceObj:any= null;
 let salesid:any=null;
 if(this.salestype==='Insurence'){
  salesid=1;
 }else{
  salesid=2;
 }
 if(this.salestype!=='Insurence'){
  creditCard= new CreditCard(this.creditCardNum, this.validity);
 }
 if(this.salestype==='Insurence'){
  insurenceObj= new Insurence(this.insurence, this.policy, this.matuityDate);
 }
 const data=new Sales(null, this.customername,creditCard, insurenceObj, salesid,this.salestype, new Date(), officername,officerid);
 console.log(data);
 
 this.salesService.saveSalesEntry(data).subscribe(
   element=>{
    console.log(data);
    alert("Successfully Submited");
    this.router.navigate(['home/salesList']);
   }
 );
}
onCancel(){
 this.signUpForm.reset();
   }
 }

