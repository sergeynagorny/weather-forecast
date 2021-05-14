import { combine, createStore } from "effector";
import { getIsIncluded } from "../../../lib/filter";
import { $weatherFilters } from "../../sort-form";
import { TCity } from "..";

export const $selectedCities = createStore<TCity[]>([])

export const $selectedCitiesByFilter = combine($selectedCities, $weatherFilters, (list, weatherFilters) =>
  list.filter((item) => getIsIncluded(item.weather, [...weatherFilters]))
)