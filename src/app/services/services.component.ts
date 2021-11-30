import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private http : HttpClient, private userService : UserService) { }

 //private posts : Observable<Users>;

 posts;

 //user : Users[]=[];

  ngOnInit(): void {
  this.userService.getUsers().subscribe( (response : Users)=> {
    this.posts = response;
  });
  }

}
