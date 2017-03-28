export class Location{
  private lat : number;
  private lng : number;

  public getLat() : number{
  return this.lat;
  }

  public setLat(lat : number){
    this.lat = lat;
  }

  public getLng() : number{
    return this.lng;
  }

  public setLng(lng : number){
    this.lng = lng;
  }
}
