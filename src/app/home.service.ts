import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor( private http: Http) { }

  getinfo() {
    return this.http.get('https://api.spacexdata.com/v2/info')
      .map((res: Response) => res.json());
  }
}
