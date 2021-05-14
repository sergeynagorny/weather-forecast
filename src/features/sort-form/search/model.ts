import { createEvent, createStore } from "effector";
import { FormEvent } from "react";

export const searchChanged = createEvent<FormEvent<HTMLInputElement>>('')
export const $search = createStore<string>('')
  .on(searchChanged, (_, event) => event.currentTarget.value);