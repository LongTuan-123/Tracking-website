'use client'

import type { LatLng, MarkerOptions } from 'leaflet'
import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'

import 'leaflet-routing-machine'

const LGet: any = L

const useRoutineMachineLayer = () => {
  const waypoints = [
    L.latLng(21.028511, 105.778545),
    L.latLng(21.030228, 105.790183),
    L.latLng(21.036354, 105.825377),
    L.latLng(21.029739, 105.837453), // Hang Dau Street coordinates
    L.latLng(21.026282, 105.884655)
  ]

  const targetLocation = 'https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png'

  const stationLocation =
    'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/home-circle-green-512.png'

  const instance = LGet.Routing.control({
    waypoints: waypoints,
    lineOptions: {
      styles: [{ color: '#6FA1EC', weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: true,
    createMarker: (i: number, waypoint: { latLng: LatLng }): L.Marker => {
      let iconUrl = stationLocation

      if (i === 0 || i === waypoints.length - 1) {
        iconUrl = targetLocation
      }

      const markerOptions: MarkerOptions = {
        icon: L.icon({
          iconRetinaUrl: iconUrl,
          iconUrl: iconUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      }

      return L.marker(waypoint.latLng, markerOptions)
    }
  })

  return instance
}

const RoutingMachine = createControlComponent(useRoutineMachineLayer)

export default RoutingMachine
