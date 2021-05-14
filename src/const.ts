export const URL = `https://geo-weather-json.herokuapp.com/db`;

export enum Weather {
  RAINY = 'rainy',
  SUNNY = 'sunny',
  CLOUDY = 'cloudy',
  SNOWY = 'snowy',
  STORMY = 'stormy',
  BLIZZARD = 'blizzard',
  METORITE = 'metorite',
}

export enum SortType {
  ALPHABET = 'alphabet-sort',
  ALPHABET_REVERSE = 'alphabet-sort-reverse',
}

export enum ResultType {
  ALL = 'all',
  SELECTED = 'selected',
}
