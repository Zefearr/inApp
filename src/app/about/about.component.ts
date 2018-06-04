import { Component, OnInit, ElementRef, HostBinding } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import * as $ from 'jquery'; 
import { routeFadeStateTrigger, routeSlideTrigger } from '../shared/routeanimations';





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [ 
    routeFadeStateTrigger,
    routeSlideTrigger 
  ]
  
})


export class AboutComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;
  lat: number = 35.003919;
  lng: number = 135.770320;



  constructor(_elem: ElementRef, _mapsWrapper: GoogleMapsAPIWrapper) { } 

  ngOnInit() {
  }
  public customStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "hue": "#ff4400"
        },
        {
          "saturation": -100
        },
        {
          "lightness": -4
        },
        {
          "gamma": 0.72
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon"
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [
        {
          "hue": "#0077ff"
        },
        {
          "gamma": 3.1
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "hue": "#00ccff"
        },
        {
          "gamma": 0.44
        },
        {
          "saturation": -33
        }
      ]
    },
    {
      "featureType": "poi.park",
      "stylers": [
        {
          "hue": "#44ff00"
        },
        {
          "saturation": -23
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "hue": "#007fff"
        },
        {
          "gamma": 0.77
        },
        {
          "saturation": 65
        },
        {
          "lightness": 99
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "gamma": 0.11
        },
        {
          "weight": 5.6
        },
        {
          "saturation": 99
        },
        {
          "hue": "#0091ff"
        },
        {
          "lightness": -86
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "lightness": -48
        },
        {
          "hue": "#ff5e00"
        },
        {
          "gamma": 1.2
        },
        {
          "saturation": -23
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "saturation": -64
        },
        {
          "hue": "#ff9100"
        },
        {
          "lightness": 16
        },
        {
          "gamma": 0.47
        },
        {
          "weight": 2.7
        }
      ]
    }
  ];

  choosenLocation(event) {
  this.lat = event.coords.lat;
  this.lng = event.coords.lng;
  }

}
