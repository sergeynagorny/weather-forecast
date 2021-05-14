import { TCity } from "../../features/cities";

export const getFilteredCityBySearch = (item: TCity, searchValue: string) => {
  if (!searchValue) return item;
  return item.city.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ? true : false;
}

export const getIsIncluded = <T>(list: T[], includeList: T[]) => {
  return includeList.every((filter) => list.includes(filter));
}
