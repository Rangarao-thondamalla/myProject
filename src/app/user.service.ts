import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http : HttpClient) { }
  isLoggedIn(): boolean {
    return false;
  }
  getUsers():Observable<any>{ 
    return this.http.get(this.url);
  }
  deleteusers(id:number):Observable<Users>{
    return this.http.delete<Users>(this.url + '/'+ id);
  }
}
