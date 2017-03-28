import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from "./entity/User";
import {MapData} from "./entity/MapData";
import {Response} from '@angular/http';

@Injectable()
export class HttpService {

  private userDataUrl:string = "https://localhost:8080/usemaps/user";
  private mapDataUrl:string = "https://localhost:8080/usemaps/map"

  constructor(private http:Http) {
  }

  doGetUser(id:number) {
    var user:User;
    this.http.get(this.mapDataUrl + "/" + id).subscribe((data:Response) => user = data.json());
    return user;
  }

  doGetMap(id:number):MapData {
    var map:MapData;
    this.http.get(this.mapDataUrl + "/" + id).subscribe((data:Response) => map = data.json());
    return map;
  }

  doGetAllUsers():User[] {
    var userArray:User[];
    this.http.get(this.userDataUrl).subscribe((data:Response) => userArray = data.json());
    return userArray;
  }

  doGetAllMaps():MapData[] {
    var mapArray:MapData[];
    this.http.get(this.mapDataUrl).subscribe((data:Response) => mapArray = data.json());
    return mapArray;
  }

  doPutMap(id:number, map:MapData) {
    this.http.put(this.mapDataUrl + "/" + id, JSON.stringify(map));
  }

  doPutUser(id:number, user:User) {
    this.http.put(this.userDataUrl + "/" + id, JSON.stringify(user));
  }

  doPostUser(id:number, user:User) {
    this.http.post(this.userDataUrl + "/" + id, JSON.stringify(user));
  }

  doPostMap(id:number, map:MapData) {
    this.http.post(this.mapDataUrl + "/" + id, JSON.stringify(map));
  }

  doDeleteUser(id:number) {
    this.http.delete(this.userDataUrl + "/" + id);
  }

  doDeleteMap(id:number) {
    this.http.delete(this.mapDataUrl + "/" + id);
  }
}
