import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';



@Injectable({
  providedIn: 'root'
})
export class UserService  {
  user: User | undefined
  USER_KEY = '[user]'
  
  get isLogged():boolean {
    return !!this.user
  }

  constructor() {
    try{
      const lsUser = localStorage.getItem(this.USER_KEY) || ""
      this.user = JSON.parse(lsUser)
    } catch(error) {  
      this.user = undefined
    }
  }

  login(): void {

  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
  
}
