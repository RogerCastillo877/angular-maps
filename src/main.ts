import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1Ijoicm9jYXM4NyIsImEiOiJja3Y5a3JtODVhNWlqMzJuenU3d3JtbTVsIn0.zI5FNRvuVM_PyFE4rBYfDw';

if( !navigator.geolocation ) {
  alert('Navegador no soporta la geolocalización');
  throw new Error('T he browser does not support Geolocalization');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
