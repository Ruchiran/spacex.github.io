import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
    { path: 'vehicle', component: VehicleComponent },
    { path: 'home', component: HomeComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
