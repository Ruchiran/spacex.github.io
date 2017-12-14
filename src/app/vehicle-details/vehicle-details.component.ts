import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  currentRoute: any;
  vehicle = {
    id: '',
    name: '',
    type: '',
    active: '',
    stages: '',
    boosters: '',
    cost_per_launch: '',
    success_rate_pct: '',
    company: '',
    country: '',
    height: {
      meters: '',
      feet: ''
    },
    diameter: {
      meters: '',
      feet: ''
    },
    mass: {
      kg: '',
      lb: ''
    }
  };

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService) {

  }

  ngOnInit() {
    this.currentRoute = this.activatedRoute;
    this.currentRoute.params.subscribe((params: Params) => {

      const id = params['id'];
      this.vehicleService.getvehicle(id).subscribe(data => this.vehicle = data);

    });

  }
  test() {
    console.log(this.vehicle);
  }
}
