import { createEvent, createStore } from "effector";
import { FormEvent } from "react";

export const filterTypeChanged = createEvent<FormEvent<HTMLInputElement>>('')
export const $filters = createStore<Set<string>>(new Set())
  .on(filterTypeChanged, (store, event) => {
    const value = event.currentTarget.value;
    store.has(value) ? store.delete(value) : store.add(value)
    return new Set(store);
  });
