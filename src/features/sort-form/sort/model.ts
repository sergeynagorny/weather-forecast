import { createEvent, createStore } from "effector";
import { FormEvent } from "react";
import { SortType } from "../const";

export const sortTypeChanged = createEvent<FormEvent<HTMLInputElement>>('')
export const $sortType = createStore<string>(SortType.ALPHABET)
 .on(sortTypeChanged, (_, event) => event.currentTarget.value);

