import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GlobalLoaderComponent } from './core/global-loader/global-loader.component';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }