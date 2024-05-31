import { Component, OnInit } from '@angular/core';
import { Album } from '../types/Album';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, CoreModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{

  noAlbums: boolean = true;
	albumsList: Album[] = [];

	constructor(private apiService:ApiService) {}

	ngOnInit(): void {
		
		this.apiService.getAlbums().subscribe({next:(albumsList) => {
		this.albumsList = Object.values(albumsList)}})		
	}

}
