import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HomeComponent } from './home/home.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { LaunchesComponent } from './launches/launches.component';

const appRoutes: Routes = [
    { path: 'vehicle', component: VehicleComponent },
    { path: 'home', component: HomeComponent },
    { path: 'launchpad', component: LaunchpadComponent },
    { path: 'launches', component: LaunchesComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
