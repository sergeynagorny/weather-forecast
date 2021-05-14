import { TMetaByType } from "."

export enum FilterType {
  RAINY = 'rainy',
  SUNNY = 'sunny',
  CLOUDY = 'cloudy',
  SNOWY = 'snowy',
  STORMY = 'stormy',
  BLIZZARD = 'blizzard',
  METORITE = 'metorite',
}

export const MetaByFilterType: TMetaByType = {
  [FilterType.RAINY]: {
    icon: 'icon--rainy',
    ariaLabel: 'Дождливо'
  },
  [FilterType.SUNNY]: {
    icon: 'icon--sunny',
    ariaLabel: 'Солнечно'
  },
  [FilterType.CLOUDY]: {
    icon: 'icon--cloudy',
    ariaLabel: 'Облачно'
  },
  [FilterType.SNOWY]: {
    icon: 'icon--snowy',
    ariaLabel: 'Снежно'
  },
  [FilterType.STORMY]: {
    icon: 'icon--stormy',
    ariaLabel: 'Торнадо'
  },
  [FilterType.BLIZZARD]: {
    icon: 'icon--blizzard',
    ariaLabel: 'Гроза'
  },
  [FilterType.METORITE]: {
    icon: 'icon--metorite',
    ariaLabel: 'Метеоритный дождь'
  },
}

export enum SortType {
  ALPHABET = 'alphabet-sort',
  ALPHABET_REVERSE = 'alphabet-sort-reverse',
}

export const MetaBySortType: TMetaByType = {
  [SortType.ALPHABET]: {
    icon: 'icon--arrow-up',
    ariaLabel: 'Сортировка по алфавиту'
  },
  [SortType.ALPHABET_REVERSE]: {
    icon: 'icon--arrow-down',
    ariaLabel: 'Сортировка по алфавиту в обратном направлении'
  },
}


