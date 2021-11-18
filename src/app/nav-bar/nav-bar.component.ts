import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  tutorials = "classes on angular";
  message:string;
  subscription: Subscription;

  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.CurrentClasstime.subscribe(message => this.message = message);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  newMessage() {
    this.data.changeClasstime("9Am in clock ");
  }

}
