import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private classtime = new BehaviorSubject('8AM time in clock');

  CurrentClasstime = this.classtime.asObservable();

  changeClasstime(message: string){
    this.classtime.next(message)
  }
}
