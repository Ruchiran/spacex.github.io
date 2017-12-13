import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {

  launchpad = [];

  constructor(private router: Router,
    private launchService: LaunchService) { }

  ngOnInit() {
    this.launchService.getAllLaunchpad().subscribe(data => this.launchpad = data);

  }
}
