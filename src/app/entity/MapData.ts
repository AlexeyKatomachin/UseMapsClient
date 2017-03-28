import {Location} from "./location/Location";
export class MapData{
  private location : Location;
  private accuracy : number;

  public setLocation( location : Location){
    this.location = location;
  }

  public getLocation(): Location{
    return this.location;
  }

  public setAccuracy(accuracy : number){
    this.accuracy = accuracy;
  }

  public getAccuracy() : number{
    return this.accuracy;
  }
}
