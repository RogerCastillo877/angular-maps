import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewsComponent } from './components/map-views/map-views.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewsComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
