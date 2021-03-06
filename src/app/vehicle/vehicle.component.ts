import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicle = [
    {id: ''}
  ];

  constructor(private router: Router,
    private vehicleService: VehicleService) {

  }

  ngOnInit() {
    this.vehicleService.getallvehicle().subscribe(data => this.vehicle = data);

  }
}
