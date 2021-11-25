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

  listdata =['Ranga','veera','guru','jhon','nicolos','hello'];

  mywifename = "LAKShmi";

  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based

  a : number = 357.25;
  b : number = 250.25789;
  c : number = 2;

  counter = 1;
  imageUrl: string = "";

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
