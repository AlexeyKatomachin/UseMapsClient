import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from "./map.component"

import { AgmCoreModule } from 'angular2-google-maps/core';
import { HttpModule }   from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0DO7T4K-inMm0xul4HKUEUDRZYbkQY1g'
    })
  ],
  providers: [],
  declarations: [ MapComponent ],
  bootstrap: [ MapComponent ]
})
export class AppModule {}
