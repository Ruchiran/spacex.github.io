import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class VehicleService {

  constructor(private http: Http) { }

  getvehicle() {
    return this.http.get('https://api.spacexdata.com/v2/rockets')
      .map((res: Response) => res.json());
  }
}
