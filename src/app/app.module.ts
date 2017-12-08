import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { routing } from './app.routing';
import { HomeService } from './home.service';
import { LaunchService } from './launch.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    VehicleComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [HomeService, LaunchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
