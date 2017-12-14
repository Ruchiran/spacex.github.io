import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showSelectedSite: boolean;
  showSelectedRocket: boolean;

  constructor(private homeService: HomeService) {
  }
  info = {
    name: '',
    founder: '',
    founded: '',
    employees: '',
    summary: ''
  };
  latest = {
    links: {
      mission_patch: ''
    },
    flight_number: '',
    launch_year: '',
    rocket: {
      rocket_id: '',
      rocket_name: ''
    },
    launch_site: {
      site_name: ''
    },
    launch_date_utc: '',
    details: ''
   
  };

  ngOnInit() {
    this.showSelectedRocket = false ;
     this.showSelectedSite = false;
    this.homeService.getinfo().subscribe(data => this.info = data);
    this.homeService.getlatest().subscribe(data => this.latest = data);
  }
  showRocket() {
    if (this.showSelectedRocket === false) {
    this.showSelectedRocket = true;
    }else{
      this.showSelectedRocket = false;
    }
  }
    showsite() {
      if (this.showSelectedSite === false) {
      this.showSelectedSite = true;
      }else{
        this.showSelectedSite = false;
      }
  }
}
