import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService implements OnDestroy 
{
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
	
	register( username:string, email:string, password:string, repeatPassword:string) {
		console.log(username, email, password, repeatPassword )
		return this.http.post<User>('/api/register', {username, email, password, repeatPassword})
		.pipe(tap((user) => this.user$$.next(user)))
	}

	login(email:string, password:string) {	
		return this.http.post<User>('/api/login', {email, password})
		.pipe(tap((user) => this.user$$.next(user))); 
	}
	
	getProfile() {
		return this.http.get<User>('/profile')
		.pipe(tap((user) => this.user$$.next(user)));
	}

	updateProfile(username:string, email:string) {
		return this.http.put<User>('/profile', {username, email})
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

