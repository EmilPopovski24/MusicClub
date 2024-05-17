import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GlobalLoaderComponent } from './core/global-loader/global-loader.component';



@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    GlobalLoaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }