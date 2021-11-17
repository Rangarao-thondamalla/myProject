import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
