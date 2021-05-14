import { useStore } from "effector-react";
import { $search, searchChanged } from "./model";

export const Search = () => {
  const value = useStore($search);

  return (
    <div className="sort-form__input-wrapper input-wrapper input-wrapper--search">
      <input
        value={value}
        onChange={searchChanged}
        id="search"
        type="search"
        name="city-search"
        placeholder="Название города"
      />
      <label htmlFor="search" aria-label="Поиск городов" />
    </div>
  );
};
