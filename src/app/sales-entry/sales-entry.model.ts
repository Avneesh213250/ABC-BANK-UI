import { CreditCard } from './creditCart.model';
import { Insurence } from './insurence.model';

export class Sales{
    constructor(public id:any, public customername:string, public creditCard:CreditCard, public insurence:Insurence,public salesId:number, public salestype:string, public createdDate:Date, public createdBy:string, public officerid:number){}
}