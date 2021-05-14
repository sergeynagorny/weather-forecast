import { getMapBounds } from "../../lib/mapbox";
import { TCity } from "../cities";
import { $selectedCitiesByFilter } from "../cities/selected";

export type TMarker = {
  longitude: number,
  latitude: number,
}

const getCitiesCoords = (cities: TCity[]) => {
  return cities.map((city) => city.coordinates)
}

export const $markers = $selectedCitiesByFilter.map(getCitiesCoords);
export const $mapBounds = $markers.map(getMapBounds);