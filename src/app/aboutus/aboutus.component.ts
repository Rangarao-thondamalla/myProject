import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  date :any;
  subscription : Subscription;

  constructor( private data : DataService) { }


  ngOnInit(): void {
    this.subscription = this.data.currentdate.subscribe(date => this.date = date)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  newdate(){
    this.data.changeDate(new Date());
  }
}
