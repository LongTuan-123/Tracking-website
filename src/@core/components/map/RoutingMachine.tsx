import type { LatLng, MarkerOptions } from 'leaflet'
import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'

import LocationIcon from '../../svg/LocationIcon.svg'
import useCommonStore from '@/store/common-store/useCommonStore'

const LGet: any = L

const useRoutineMachineLayer = () => {
  const { waypoints } = useCommonStore()

  const instance = LGet.Routing.control({
    waypoints,
    lineOptions: {
      styles: [{ color: '#6FA1EC', weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: (i: number, waypoint: { latLng: LatLng }): L.Marker => {
      const markerOptions: MarkerOptions = {
        icon: L.icon({
          iconUrl: LocationIcon,
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
