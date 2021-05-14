import { WebMercatorViewport, FlyToInterpolator } from 'react-map-gl';
import { easeCubic } from 'd3-ease';
import { TMarker } from "../../features/map/model";


const EUROPE_COORDS = [[37, 55], [2, 41]]

export const MAP_CONFIG = {
  mapStyle: "mapbox://styles/mapbox/light-v10",
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_TOKEN,
};

export const MAP_INITIAL_VIEWPORT = {
  width: 800,
  height: 725,
  maxZoom: 4,
}


export const updateViewportByMapBounds = (viewport: any, mapBounds: any) => {
  const { longitude, latitude, zoom } = new WebMercatorViewport(viewport)
    .fitBounds(mapBounds, { padding: 100 });

  return {
    ...viewport,
    longitude,
    latitude,
    zoom,
    transitionDuration: 2000,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: easeCubic
  }
}

export const getMapBounds = (list: TMarker[]) => {
  if (!list.length) {
    return EUROPE_COORDS;
  }

  const longitude = list.map((item) => item.longitude);
  const latitude = list.map((item) => item.latitude);

  const Longitude = {
    MIN: Math.min(...longitude),
    MAX: Math.max(...longitude)
  }

  const Latitude = {
    MIN: Math.min(...latitude),
    MAX: Math.max(...latitude)
  }

  return [[Longitude.MAX, Latitude.MAX], [Longitude.MIN, Latitude.MIN]]
}
