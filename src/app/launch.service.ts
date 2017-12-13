import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LaunchService {

  constructor(private http: Http) { }
  getAllLaunchpad() {
    return this.http.get('https://api.spacexdata.com/v2/launchpads')
      .map((res: Response) => res.json());
  }

  getAllLaunch() {
    return this.http.get('https://api.spacexdata.com/v2/launches')
      .map((res: Response) => res.json());
  }
  getLaunchpad(id: string) {
    return this.http.get('https://api.spacexdata.com/v2/launchpads/' + id)
      .map((res: Response) => res.json());
  }
}
