import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-views',
  templateUrl: './map-views.component.html',
  styleUrls: ['./map-views.component.css']
})
export class MapViewsComponent implements OnInit {

  constructor( private placesService: PlacesService ) { }

  ngOnInit(): void {
    console.log(this.placesService.useLocation);  
  }

}
