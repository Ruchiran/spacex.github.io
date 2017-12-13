import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
launchDetails = [];

  constructor(private router: Router,
    private launchService: LaunchService) { }

  ngOnInit() {
    this.launchService.getAllLaunch().subscribe(data => this.launchDetails = data);
  }
}
