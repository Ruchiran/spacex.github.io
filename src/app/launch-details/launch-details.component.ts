import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  currentRoute: any;
  launchpad = {
  };

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private Launchservice: LaunchService) { }

  ngOnInit() {
    this.currentRoute = this.activatedRoute;
    this.currentRoute.params.subscribe((params: Params) => {

      const id = params['id'];
      this.Launchservice.getLaunchpad(id).subscribe(data => this.launchpad = data);

    });
  }
}
