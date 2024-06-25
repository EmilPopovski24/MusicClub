import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  standalone: true,
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
	
	apiError$ = this.errorService.apiError$$.asObservable();

	errorMessage = "";
	constructor(private errorService:ErrorService) {}

	ngOnInit(): void {
		this.apiError$.subscribe((err:any) => {
			this.errorMessage = err.message
		})
	}
}