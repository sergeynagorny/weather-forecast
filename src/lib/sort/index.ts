import { SortType } from "../../const";
import { TCity } from "../../features/cities";

export const getSortedCity = (left: TCity, right: TCity, sortType: any) => {
  switch (sortType) {
    case SortType.ALPHABET:
      return left.city < right.city ? -1 : 1
    case SortType.ALPHABET_REVERSE:
      return left.city > right.city ? -1 : 1
    default:
      return 0;
  }
}
