import { HttpClient } from '@angular/common/http';
import { Sales } from './sales-entry.model';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Officer } from '../shared/officer.model';
import { User } from '../shared/user.model';

@Injectable()
export class SalesEntryService{

    constructor(private http: HttpClient){}
    editSales= new Subject<Sales>();
    editSalesSearch= new Subject<Sales>();
    saveSalesEntry(sales:Sales) : Observable<Sales>{
        return this.http.post<Sales>('http://localhost:8082/saveSalesEntry/', sales);
    }
    getAllSalesEntry():Observable<Sales[]>{
        return this.http.get<Sales[]>('http://localhost:8082/getAllSalesEntry/');
    }
    getByIdSalesEntry(userid:number):Observable<Sales>{
        return this.http.get<Sales>('http://localhost:8082/getSalesEntryById/'+userid);
    }
    deleteById(userid:number):Observable<any>{
        return this.http.delete<any>('http://localhost:8082/deleteSalesEntry/'+userid);
    }
    updateSales(sales:Sales, id:number) : Observable<Sales>{
        return this.http.put<Sales>('http://localhost:8082/updateSalesEntry/'+id, sales);
    }
    getByOfficerSalesEntry(id:number):Observable<Sales[]>{
        return this.http.get<Sales[]>('http://localhost:8082/getByOfficerId/'+id);
    }
    getAllOfficer():Observable<User[]>{
        return this.http.get<User[]>('http://localhost:8082/getAllUserById/');
    }
}