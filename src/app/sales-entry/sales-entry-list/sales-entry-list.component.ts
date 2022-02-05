import { Component, OnInit } from '@angular/core';
import { SalesEntryService } from '../sales-entry.service';
import { Sales } from '../sales-entry.model';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/shared/excel.service';
import { ExcelModel } from 'src/app/shared/excelSales.model';

@Component({
  selector: 'app-sales-entry-list',
  templateUrl: './sales-entry-list.component.html',
  styleUrls: ['./sales-entry-list.component.css']
})
export class SalesEntryListComponent implements OnInit {
salesData:Sales|any;
  constructor(private salesService:SalesEntryService,
    private router:Router,
    private excelService:ExcelService) { }
 salesList:Sales[]|any;
  ngOnInit(): void {
    this.salesService.getAllSalesEntry().subscribe(

      (element:Sales[])=>{
        this.salesList=element;
      }
    );
  }
  ondelete(index:number){
    let con=confirm('Are you sure?');
    if(con===true){
      this.salesData=this.salesList[index];
      console.log(this.salesData.id);
      
      this.salesService.deleteById(this.salesData.id).subscribe(
        data=>{
          console.log(data+ 'deleted');
          this.salesService.getAllSalesEntry().subscribe(
  
            (element:Sales[])=>{
              this.salesList=element;
            }
          );
          this.router.navigate(['home/salesList']);
          
        }
      );
    }
    
  }
  onEdit(index:number){
    this.salesData=this.salesList[index];
    console.log(this.salesData.id);
    this.salesService.editSales.next(this.salesData);
    localStorage.setItem('type', this.salesData.salestype);
    this.router.navigate(['home/editsales/']);
  }
  exportAsXLSX():void {
    let list:ExcelModel[]=[];

  
    this.salesList.forEach((element:any) => {

      
      if(element.creditCard===null){
        
        list.push(new ExcelModel(element.id, element.customername, "Empty", "Insurance = "+element.insurence.insurence+", Policy = "+element.insurence.policy+" and Maturity Date = "+element.insurence.matuityDate, element.salesId, element.salestype,
        element.createdDate, element.createdBy, element.officerid)) 
      }else{
        list.push(new ExcelModel(element.id, element.customername, " Creadit Card = "+element.creditCard.creditCardNum+" and Validity = "+element.creditCard.validity, "Empty", element.salesId, element.salestype,
        element.createdDate, element.createdBy, element.officerid)) 
      }
      
    });
    this.excelService.exportAsExcelFile(list, 'salesList');
  }
}
