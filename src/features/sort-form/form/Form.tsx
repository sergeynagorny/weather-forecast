import React from "react";
import { Filter, Search, Sort } from "..";

export const Form = () => {
  return (
    <section className="sort-form weather-content__sort">
      <h2 className="visually-hidden">Форма сортировки</h2>
      <form action="#" method="GET" onSubmit={(evt) => evt.preventDefault()}>
        <div className="sort-form__group">
          <Sort />
        </div>
        <div className="sort-form__group">
          <Search />
        </div>
        <div className="sort-form__group">
          <Filter />
        </div>
      </form>
    </section>
  );
}
