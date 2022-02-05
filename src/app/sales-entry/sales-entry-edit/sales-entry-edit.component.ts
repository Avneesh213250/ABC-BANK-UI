import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesEntryService } from '../sales-entry.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CreditCard } from '../creditCart.model';
import { Insurence } from '../insurence.model';
import { Sales } from '../sales-entry.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sales-entry-edit',
  templateUrl: './sales-entry-edit.component.html',
  styleUrls: ['./sales-entry-edit.component.css']
})
export class SalesEntryEditComponent implements OnInit {
  editForm:FormGroup= new FormGroup({});
  // @ViewChild('editForm') editForm:NgForm;

  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private salesService:SalesEntryService) { }

  

id:any;
salesid:any;
customername:string='';
salestype:string='';
creditCardNum:any=null;
validity:Date=new Date();
insurence:any=null;
policy:string='';
matuityDate:Date=new Date();
createdDate:Date=new Date();
createdBy:string='';
username1:string='Avneesh';
testData:any;
flag:any =null;
ngOnInit(): void {
  


  this.salesService.editSales.subscribe(
    element=>{
//       this.id=element.id;
//       this.customername= element.customername;
//       this.salestype=element.salestype;

//  this.salesid=element.salesId;
//  if(element.creditCard!==null){
//   this.creditCardNum=element.creditCard.creditCardNum;
//   this.validity=element.creditCard.validity;
//  }else{
//   this.insurence=element.insurence.insurence;
//   this.policy=element.insurence.policy;
//   this.matuityDate= element.insurence.matuityDate;
//  }
 localStorage.setItem('data', JSON.stringify(element));

 
    }
  );
  let test:any= localStorage.getItem('data');
  this.testData=JSON.parse(test);
  console.log(this.testData);
  
  if(this.testData.insurence!==null){
    this.flag='Insurence';
    let maturity=this.fromJsonDate(this.testData.insurence.matuityDate);
    console.log(maturity);
    
    this.editForm=new FormGroup({
     
      customername:new FormControl(this.testData.customername, Validators.required),
      salestype:new FormControl(this.testData.salestype),
      creditCardNum:new FormControl(null),
       validity:new FormControl(null),
      insurence:new FormControl(this.testData.insurence.insurence),
      policy:new FormControl(this.testData.insurence.policy),
      matuityDate:new FormControl(maturity)
      
  });
  }else{
    this.flag='CreditCard';
    let validity1=this.fromJsonDate(this.testData.creditCard.validity);
    this.editForm=new FormGroup({

      customername:new FormControl(this.testData.customername, Validators.required),
      salestype:new FormControl(this.testData.salestype),
      creditCardNum:new FormControl(this.testData.creditCard.creditCardNum),
      validity:new FormControl(validity1),
      insurence:new FormControl(null),
       policy:new FormControl(null),
      matuityDate:new FormControl(null)
      
  });
  }
  
}
fromJsonDate(jDate:any): string {
  const bDate: Date = new Date(jDate);
  return bDate.toISOString().substring(0, 10);  //Ignore time
}
onSubmit(){
console.log(this.editForm.value.customername);

this.testData.customername=this.editForm.value.customername;


 if(this.flag!=='Insurence'){
  this.testData.creditCard.creditCardNum=this.editForm.value.creditCardNum;
this.testData.creditCard.validity=this.editForm.value.validity;
this.testData.insurence=null;
 }
 if(this.flag==='Insurence'){
  this.testData.creditCard=null;
  this.testData.insurence.insurence=this.editForm.value.insurence;
  this.testData.insurence.policy=this.editForm.value.policy;
  this.testData.insurence.matuityDate=this.editForm.value.matuityDate;
 }
 
 
 this.salesService.updateSales(this.testData, this.testData.id).subscribe(
   element=>{
    console.log(element);
    this.router.navigate(['home/salesList']);
   }
 );
}
onCancel(){
 this.editForm.reset();
   }
   close(){
    this.router.navigate(['home/salesList']);
  }
}
