import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { throwError } from 'rxjs';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-views',
  templateUrl: './map-views.component.html',
  styleUrls: ['./map-views.component.css']
})
export class MapViewsComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placesService: PlacesService,
              private mapService: MapService ) { }
  
  ngAfterViewInit(): void {
    
    if( !this.placesService.useLocation ) throwError('No hay placeService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/mapbox/dark-v10',
      // style: 'mapbox://styles/mapbox/light-v10',
      center: this.placesService.useLocation,
      zoom: 14,
    });

    const popup = new Popup()
      .setHTML(`
      <h6>Aquí estoy</h6>
      <span>Estoy en este lugar del mundo</span>
      `);
    
    new Marker({ color: 'red'})
      .setLngLat( this.placesService.useLocation! )
      .setPopup( popup)
      .addTo( map )

    this.mapService.setMap( map );
  }

}
