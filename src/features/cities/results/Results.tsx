import { useGate, useStore } from "effector-react";
import { FC, useState, useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { ResultType } from "../../../const";
import { DroppableColumn } from "../../../lib/drag-n-drop/index";
import { ConditionalList } from "../../../ui/ConditionalList";
import { $allCitiesByFilter, CityCardAll, loadCitiesFX } from "../all";
import { $selectedCitiesByFilter, CityCardSelected } from "../selected";
import { onDragEnd, ResultsGate } from "./model";


export const Results = () => {
  const [droppableSource, setDroppableSource] = useState('');
  
  useGate(ResultsGate);

  const onDragStart = useCallback(({ source }) => {
    setDroppableSource(source.droppableId)
  }, []);

  return (
    <section className="weather-content__result">
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <ResultsAll droppableSource={droppableSource} />
        <ResultsSelected />
      </DragDropContext>
    </section>
  );
}

const ResultsAll: FC<{droppableSource: string}> = ({droppableSource}) => {
  const all = useStore($allCitiesByFilter); 
  const isLoading = useStore(loadCitiesFX.pending);

  return (
    <div className="weather-content__small-cards">
      <ConditionalList isLoading={isLoading}>
        <DroppableColumn items={all} isDropDisabled={droppableSource === ResultType.ALL} droppableId={ResultType.ALL}>
          <CityCardAll />
        </DroppableColumn>
      </ConditionalList>
    </div>
  );
}

const ResultsSelected = () => {
  const selected = useStore($selectedCitiesByFilter);

  return (
    <div className="weather-content__big-cards">
        <DroppableColumn items={selected} droppableId={ResultType.SELECTED} emptyComponent={SelectedEmptyComponent}>
          <CityCardSelected />
        </DroppableColumn>
    </div>
  );
}

const SelectedEmptyComponent = () => {
  return (
    <div className="big-card big-card--empty">
      <div className="weather-content__help">
        Перетащите сюда города, погода в которых вам интересна
      </div>
    </div>     
  )
}