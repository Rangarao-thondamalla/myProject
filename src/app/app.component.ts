import { Component ,ViewChild , AfterViewInit} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  myname = 'Rangarao';
  number = 12345769;
  my_array = ['Rajesh','guru','jaypal','ranga','hiran','raghu', 'lakshmimadam'];

  mywifenameparent="Pulluru";
  mywifenameinparent(valueEmited){
    this.mywifenameparent = valueEmited;
  }

  counterintialvalue = 0;
  counterincrements(value){
    this.counterintialvalue = value;
  }

  @ViewChild(HomeComponent) child :any;
  message :string;
  mywifename : string;

  @ViewChild(NavBarComponent) children :any;
  tutorials : string;

  ngAfterViewInit(){
    this.message = this.child.message;
    this.mywifename = this.child.mywifename;
    this.tutorials = this.children.tutorials;
  }
}
