import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Officer } from '../shared/officer.model';
import { User } from '../shared/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginSrevice{

constructor(private http: HttpClient){}

logout = new Subject<boolean>();
officer= new Subject<Officer>();
loginmodel= new Subject<User>();
userservice=new Subject<User>();
usertype=new Subject<String>();
userid:any;
password:any;
myflag:boolean=false;
login(userid:number, password:string) : Observable<User>{
    return this.http.get<User>('http://localhost:8082/getUserByIdCheck/'+userid+'/'+password);
}
updatePassword(userid:number, password:string) : Observable<any>{
    return this.http.put<User>('http://localhost:8082/updateUser/'+userid, new User(userid, password, 'Officer'));
}
getUser(userid:number) : Observable<any>{
    return this.http.get<any>('http://localhost:8082/getUserById/'+userid);
}
}