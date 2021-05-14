import { createApi, createEvent, forward, sample, Store } from "effector"
import { ResultType } from "../../../const"
import { $allCities, loadCitiesFX } from "../all"
import { $selectedCities } from "../selected"
import { TCity } from ".."
import { TDragResult, TReorderedItem } from './../../../lib/drag-n-drop'
import { createGate } from "effector-react"

export const ResultsGate = createGate();
const cityMoved = createEvent<TDragResult>();
const citiesReordered = createEvent<TReorderedItem>();

const createStoreApi = (store: any) => {
  return createApi(store, {
    update: (_, payload) => [...payload],
    clear: () => [],
  })
}

const StoreApiById: any = {
  [ResultType.ALL]: createStoreApi($allCities),
  [ResultType.SELECTED]: createStoreApi($selectedCities),
}

const $results: { [key: string]: Store<TCity[]> } = {
  [ResultType.ALL]: $allCities,
  [ResultType.SELECTED]: $selectedCities,
}

sample({
  source: $results,
  clock: cityMoved,
  fn: (store, { source, destination, draggableId }) => {
    if (!source || !destination) return;

    let sourceList = store[source.droppableId];
    let destinationList = store[destination.droppableId]

    const removedIndex = sourceList.findIndex((item) => item.id === draggableId)
    const [removed] = sourceList.splice(removedIndex, 1);
    destinationList.splice(destination.index, 0, removed);

    StoreApiById[source.droppableId].update(sourceList)
    StoreApiById[destination.droppableId].update(destinationList)
  }
})

sample({
  source: $results,
  clock: citiesReordered,
  fn: (store, { sourceId, startIndex, endIndex }) => {
    const result = store[sourceId];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    StoreApiById[sourceId].update(result)
  }
})

export const onDragEnd = (result: TDragResult) => {
  const { source, destination, draggableId } = result;

  if (!destination || !source) return;

  if (source.droppableId === destination.droppableId) {

    const reorderedItem: TReorderedItem = {
      sourceId: source.droppableId,
      startIndex: source.index,
      endIndex: destination.index
    }

    citiesReordered(reorderedItem);
  } else {
    cityMoved({ source, destination, draggableId });
  }
}

forward({ from: ResultsGate.open, to: loadCitiesFX })