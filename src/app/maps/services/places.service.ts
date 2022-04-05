import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor( private http: HttpClient) {
    this.getUserLocation();
  }

  getUserLocation(): Promise<[number, number]> {
    
    return new Promise( (resolve, reject ) => {
      
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation=[ coords.longitude, coords.latitude ];
          resolve( this.useLocation );
        },
        ( err ) => {
          alert('No se pudo optener la geolocalización')
          console.log( err);
          reject();  
        }
      )
    });
  };

  getPlacesByQuery( query: string = '') {

    this.isLoadingPlaces = true;

    this.http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=-74.11864145718255%2C4.700927314889938&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1Ijoicm9jYXM4NyIsImEiOiJja3Y5a3JtODVhNWlqMzJuenU3d3JtbTVsIn0.zI5FNRvuVM_PyFE4rBYfDw`)
      .subscribe( resp => {
        console.log(resp.features);
        this.isLoadingPlaces = false;
        this.places = resp.features;        
      });
  }
}
