import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {

  }
  info = {
    name: '',
    founder: '',
    founded: '',
    employees:''
  };
  latest= {};

  ngOnInit() {
    this.homeService.getinfo().subscribe(data => this.info = data);
    this.homeService.getlatest().subscribe(data => this.latest = data);
  }

  test(){
    console.log(this.latest);
  }
}