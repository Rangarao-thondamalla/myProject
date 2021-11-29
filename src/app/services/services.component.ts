import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private http : HttpClient) { }
  data : object;
  userId : number;
  id : number;
  title : string;
  completed : boolean;
  users;
  ngOnInit(): void {
    this.users = this.http.get<any>('https://jsonplaceholder.typicode.com/todos/2').subscribe(response => {
    this.data = response;
    this.userId = response.userId;
    this.id= response.id;
    this.title = response.title;
    this.completed = response.completed;
    console.log(this.data);
  });
  }

}
