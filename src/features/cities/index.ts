export { CityCardAll } from './all'
export { Results } from './results'

export type TCity = {
  id: string
  city: string
  coordinates: {
    latitude: number
    longitude: number
  }
  temperature: number
  weather: string[]
  isSelected: boolean
  wind: {
    direction: string
    speed: string
  }
}