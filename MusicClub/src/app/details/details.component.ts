import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { Album } from '../types/Album';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule, CoreModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(private apiService:ApiService, private router: Router) { }

  getAlbumDetails() {
    this.apiService.getAlbum(name).subscribe(()=> 
      this.router.navigate([`/catalog/${name}`]))
  }

      
    



}


