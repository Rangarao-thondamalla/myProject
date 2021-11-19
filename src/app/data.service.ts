import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  private lastdate = new BehaviorSubject('18/11/2021');
  currentdate = this.lastdate.asObservable();

  constructor() { }

  changeDate(date :any){
    this.lastdate.next(date);
  }
}
