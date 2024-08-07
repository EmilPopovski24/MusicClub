import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@Component({
  selector: 'app-add-album',
  standalone: true,
  imports: [FormsModule, CommonModule, SharedModule, CoreModule],
  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.css'
})

export class AddAlbumComponent {
  constructor(private apiService:ApiService, private router:Router) {}
  
  addAlbum(form: NgForm): void {
    
    if(form.invalid) {
      return;
    }
    
    const { artist, name, released ,genre, label, singles, coverUrl, _id, owner} = form.value;
    
    this.apiService.addAlbum(artist, name, released, genre, label, singles, coverUrl, _id, owner).subscribe(() => {
      this.router.navigate(['/catalog'])
    });
  }
}