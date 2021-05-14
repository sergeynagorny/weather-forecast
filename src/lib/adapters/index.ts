import { TCity } from "../../features/cities";

const getWeathersFromObject = <T>(object: T) => {
  return Object.entries(object).reduce((acc: string[], [key, isActive]) => {
    if (isActive) acc.push(key);
    return acc;
  }, [])
}

export const adaptCitiesToClient = (item: TCity, index: number) => ({
  ...item,
  id: index + '',
  isSelected: false,
  weather: getWeathersFromObject(item.weather),
})