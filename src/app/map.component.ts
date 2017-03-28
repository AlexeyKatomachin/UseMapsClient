import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import {User} from "./entity/User";
import {HttpService} from "./http.service";
import {MapData} from "./entity/MapData";
import {Location} from "./entity/location/Location";
import {SebmGoogleMap, SebmGoogleMapMarker} from 'angular2-google-maps/core'

@Component({
  selector: 'map-com',
  directives: [SebmGoogleMap, SebmGoogleMapMarker],
  styles: [`
   .sebm-google-map-container {
     height: 300px;
   }
`],
  template: `
  <sebm-google-map [latitude]="getLat()" [longitude]="getLng()" >
  <>
    <sebm-google-map-marker [latitude]="getLat()" [longitude]="getLng()"></sebm-google-map-marker>
    <div *ngFor="let item of items">
      <sebm-google-map-marker [latitude]="maps.location.lat" [longitude]="maps.location.lng"></sebm-google-map-marker>
    </div>
  </div>
</sebm-google-map>
 `,
  providers:[HttpService]
})
export class MapComponent {

  private title:string = 'UseMaps';
  private lat:number = 53.9277 ;
  private lng:number = 27.6837 ;

  private lat1:number = 53.927 ;
  private lng1:number = 27.683 ;

  constructor( private httpService : HttpService){}

  private  maps: MapData[];

  OnInit(){
    var location : Location;
    var map : MapData;
    location.setLat(53.9276);
    location.setLng(27.6838);
    map.setLocation(location);
    //map.getAccuracy(10);
    this.maps.push(map);
    location.setLat(53.9277);
    map.setLocation(location);
    this.maps.push(map);
    location.setLat(53.9276);
    location.setLng(27.6837);
    this.maps.push(map);
  }


  getLat():number{
    return this.lat = 53.9277;
  }

  getLng():number{
    return this.lng = 27.6837;
  }

  getTitle() : string{
    var user: User;
    user = this.httpService.doGetUser(5);
    return "hjhjhjhj";
    //return user.getGmail();
  }
}
