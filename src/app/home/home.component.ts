import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }
 show = true;
}
