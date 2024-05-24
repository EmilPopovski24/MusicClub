import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';

const USER_KEY = '[user]'

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  user: User | undefined

  constructor() {
    try{
      const lsUser = localStorage.getItem(USER_KEY) || ""
      this.user = JSON.parse(lsUser)
    } catch(error) {  
      this.user = undefined
    }
  }
  
}
