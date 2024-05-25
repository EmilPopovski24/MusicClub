import { Component } from '@angular/core';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-global-loader',
  standalone: true,
  imports: [
    SpinnerComponent
  ],
  templateUrl: './global-loader.component.html',
  styleUrl: './global-loader.component.css'
})
export class GlobalLoaderComponent {

}
