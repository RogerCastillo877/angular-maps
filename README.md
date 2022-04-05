# MapsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Get Geolocalization

Create a service to get geolocalization
ng g s maps/services/places --skipTests

## Create message when is charging

ng g c maps/components/mapViews --skip-test
ng g c maps/components/loading --skipTest

## Install mapbox and set up []

npm install --save mapbox-gl
Add CSS on index.html
<link href='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
Add TypeScript requirement
npm i --save-dev @types/mapbox-gl
And add flag allowSyntheticDefaultImports in tsConfig
"allowSyntheticDefaultImports": true,