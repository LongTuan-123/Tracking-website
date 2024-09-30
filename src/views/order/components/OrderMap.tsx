'use client'

import { useEffect } from 'react'

import type { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'

import { Box } from '@mui/material'

import RoutingMachine from '@/@core/components/map/RoutingMachine'
import useCommonStore from '@/store/common-store/useCommonStore'

const startLocation: LatLngExpression = [21.0285, 105.774]
const endLocation: LatLngExpression = [21.0535, 105.8211]

const VIET_NAM_BOUNDS = {
  north: 26.625282609530778,
  south: 7.403234941112085,
  west: 91.39500174206523,
  east: 119.49802908581523
}

const defaultProps = {
  center: {
    lat: (startLocation[0] + endLocation[0]) / 2,
    lng: (startLocation[1] + endLocation[1]) / 2
  },
  restriction: {
    latLngBounds: VIET_NAM_BOUNDS,
    strictBounds: false
  },
  zoom: 13
}

const maptiler = {
  url: 'https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=LBJ7RGSDNGPh1rHfoe73',
  attribution:
    "&copy; <a href='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=LBJ7RGSDNGPh1rHfoe73'>OpenStreetMap</a> contributors"
}

const OrderMap = () => {
  const { setWaypoints } = useCommonStore()

  useEffect(() => {
    setWaypoints([
      [21.03, 105.78],
      [21.035, 105.77]
    ])
  }, [setWaypoints])

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <MapContainer
        style={{ width: '100%', height: '100%' }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        scrollWheelZoom={true}
      >
        <TileLayer attribution={maptiler.attribution} url={maptiler.url} />
        <RoutingMachine />
      </MapContainer>
    </Box>
  )
}

export default OrderMap
