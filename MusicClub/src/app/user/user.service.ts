import { Injectable, OnDestroy } from '@angular/core';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService implements OnDestroy {
	private user$$ = new BehaviorSubject<User | undefined>(undefined)
	public user$ = this.user$$.asObservable();
	user: User|undefined;
	get isLogged():boolean {
		// return true
		return !!this.user
	}
	subscription: Subscription
	USER_KEY = '[user]';

	constructor(private router:Router, private http:HttpClient) {
		
		this.subscription = this.user$.subscribe(user => {
			this.user = user
		})
	}
	
	register(email:string, username:string, password:string, repeatPassword:string) {
		return this.http.post<User>('/api/register', {email, username, password, repeatPassword})
		.pipe(tap((user) => this.user$$.next(user)))
	}

	login(username:string, password:string) {	
		return this.http.post<User>('/api/login', {username, password})
		.pipe(tap((user) => this.user$$.next(user))); 
	}
	
	getProfile() {
		return this.http.get<User>('/api/users/profile')
		.pipe(tap((user) => this.user$$.next(user)));
	}

	updateProfile(username:string, email:string) {
			return this.http.put<User>('/api/users/profile', {username, email})
			.pipe(tap((user) => this.user$$.next(user)));
	}

	logout() {
		return this.http.post<User>('/api/logout', {})
		.pipe(tap(()=> this.user$$.next(undefined)))
	}

	ngOnDestroy() :void {
		this.subscription.unsubscribe()
	}
}






// import { Injectable } from '@angular/core';
// import { User } from '../types/User';

// @Injectable({
//   providedIn: 'root'
// })

// export class UserService {
//   user: User | undefined;
//   USER_KEY = '[user]';
  
//   get isLogged():boolean {
//     // return true
    
//     return !!this.user
//   }

//   constructor() {
//     try{
//       const lsUser = localStorage.getItem(this.USER_KEY) || "";
//       this.user = JSON.parse(lsUser)
//     } catch(error) {  
//       this.user = undefined
//     }
//   }

//   login() :void {
//     this.user = {
//       email: 'john.doe@gmail.com',
//       username: 'John Doe'
//     }

//     localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
//     console.log(this.user.email)
//   }

//   logout() :void {
//     this.user = undefined;
//     localStorage.removeItem(this.USER_KEY)
//   }
  
// }