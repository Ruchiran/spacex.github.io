import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { routing } from './app.routing';
import { HomeService } from './home.service';
import { LaunchService } from './launch.service';
import { HttpModule } from '@angular/http';
import { VehicleService } from './vehicle.service';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { LaunchesComponent } from './launches/launches.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    VehicleComponent,
    LaunchpadComponent,
    LaunchesComponent,
    LaunchDetailsComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    AlertModule.forRoot(),
  ],
  providers: [HomeService, LaunchService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
