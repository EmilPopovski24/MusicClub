import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-album',
  standalone: true,
  imports: [],
  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.css'
})

export class AddAlbumComponent {
  constructor(private apiService:ApiService, private router:Router) {}
  
  addAlbum(form: NgForm): void {
    if(form.invalid) {
      return;
    }
    const { artist,name,released ,genre, label, singles, coverUrl} = form.value;
    
    this.apiService.addAlbum(artist!, name!, released!, genre!, label!, singles!, coverUrl!).subscribe(() => {
      console.log(form.value)
      this.router.navigate(['/catalog'])
      
    });
  }
}
