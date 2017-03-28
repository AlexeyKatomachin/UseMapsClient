export class User{
  /* mandatory data*/
  private  name : string;
  private state : string;
  private gmail : string;
  private id : number;

  /* setters and getters */
  public setName (name : string){
  this.name = name;
}

  public getName(): string{
  return this.name;
}

  public setState (state  : string){
  this.state = state;
}

 public getState() : string{
   return this.state;
}

 public setGmail(gmail : string){
  this.gmail = gmail;
}

  public getGmail() : string{
  return  this.gmail;
}

  public getId() : number{
  return this.id;
}

 public setId(id : number){
  this.id = id;
 }

  public print() : string{
    //var data =
    return "{" + this.name + " " + this.state + " " + this.gmail + " " + this.id + "}";
  }

}
