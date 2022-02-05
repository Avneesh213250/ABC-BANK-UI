import { Subject } from 'rxjs';

export class SharedService{

    isAuthention:boolean=false;

    login=new Subject<boolean>();
    
}