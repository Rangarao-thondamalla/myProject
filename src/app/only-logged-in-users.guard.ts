import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService){}; 
  canActivate() {
    console.log("OnlyLoggedInUsers");
  if (this.userService.isLoggedIn()) { (3)
    return true;
  } else {
    window.alert("You don't have permission to view this page"); (4)
    return false;
  }
}
  
}
