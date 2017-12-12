import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class VehicleService {

  constructor(private http: Http) { }

  getallvehicle() {
    return this.http.get('https://api.spacexdata.com/v2/rockets')
      .map((res: Response) => res.json());
  }

  getvehicle(id: string) {
    return this.http.get('https://api.spacexdata.com/v2/rockets/' + id)
      .map((res: Response) => res.json());
  }
}
