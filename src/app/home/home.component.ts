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

  message:string;
  subscription: Subscription;
  constructor( private data :DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.CurrentClasstime.subscribe(message => this.message = message )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
