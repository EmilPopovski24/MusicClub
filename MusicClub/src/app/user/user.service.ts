import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  user: User | undefined

  constructor() {
    try{
      localStorage.getItem('user')

    } catch(error) {

    }
  }
  
}
