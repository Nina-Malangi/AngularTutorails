import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './app.courses.component';
import { HelloWorldComponent } from './app.helloWorld.component';
import { ShoopingCartComponent } from './app.shoopingcart.component';
import { NamesComponent } from './names/names.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HelloWorldComponent,
    ShoopingCartComponent,
    NamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
