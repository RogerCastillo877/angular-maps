import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewsComponent } from './components/map-views/map-views.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewsComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    AngularLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
