import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  isLoggedIn(): boolean {
    return false;
  }
  getUsers():Observable<Users>{
    return this.http.get<Users>('https://jsonplaceholder.typicode.com/todos');
  }
}
