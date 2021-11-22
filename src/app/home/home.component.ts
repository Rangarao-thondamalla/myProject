import { Component, OnInit, Input , Output , EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @Input() name : string;
  @Input() lastname : string;
  @Input() rolnumber : number ;
  @Input() array : any[];

  listdata =['Ranga','veera','guru','jhon','nicolos'];

  mywifename = "lakshmi";

  counter = 1;

  @Output() onClick  = new EventEmitter();
  @Output() counterincrement = new EventEmitter();

  onClicked(mywifename){
    this.onClick.emit(mywifename);
  }

  counterincrese(counter){
    this.counterincrement.emit(counter)
  }
  show = true;

  date: any;
  subscription : Subscription;
  constructor( private data : DataService ) { }

  ngOnInit(){

    this.subscription = this.data.currentdate.subscribe(date =>this.date = date)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
