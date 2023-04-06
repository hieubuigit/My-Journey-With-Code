import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'  // the scope for use this service
})

export class LogService {

  constructor() {

  }

  viewLog(msg: any) : void {
    console.log(">> Log service throw log: ", msg);
  }

}
