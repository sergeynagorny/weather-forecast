import { combine, createEffect, createStore } from 'effector';
import { adaptCitiesToClient } from '../../../lib/adapters';
import { getFilteredCityBySearch } from '../../../lib/filter';
import { getSortedCity } from '../../../lib/sort';
import { $searchValue, $sortType } from '../../sort-form';
import { URL } from '../../../const'
import { TCity } from '..';

export const loadCitiesFX = createEffect<void, { cities: TCity[] }>()
  .use(() => fetch(URL).then(res => res.json()));

export const $allCities = createStore<TCity[]>([])
  .on(loadCitiesFX.doneData, (_, data) => data.cities.map(adaptCitiesToClient))

export const $allCitiesByFilter = combine($allCities, $searchValue, $sortType, (list, searchValue, sort) =>
  list.filter((item) => getFilteredCityBySearch(item, searchValue))
    .sort((a, b) => getSortedCity(a, b, sort))
)