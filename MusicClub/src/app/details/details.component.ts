import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { Album } from '../types/Album';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule, CoreModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  album: Album | undefined;
 
}
