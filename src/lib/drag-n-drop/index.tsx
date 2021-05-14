import { cloneElement, ElementType, FC, isValidElement } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

export type TReorderedItem = {
  sourceId: string,
  startIndex: number,
  endIndex: number
}

export type TDragItem = {
  index: number;
  droppableId: string;
}

export type TDragResult = {
  source?: TDragItem,
  destination?: TDragItem,
  draggableId: string,
}

type TDroppableColumnProps = {
  isDropDisabled?: boolean;
  droppableId: string;
  items: any[];
  emptyComponent?: ElementType;
} 

const getListStyle = (isDraggingOver: boolean) => ({
  background: !isDraggingOver ? "#DEE5FE" : "#E6EBFE",
});

export const getStyle = (style: any, snapshot: any) => {
  if (!snapshot.isDropAnimating) {
    return style;
  }
  return {
    ...style,
    transitionDuration: `0.2s`,
  };
}

export const DroppableColumn: FC<TDroppableColumnProps> = (props) => {
  const { isDropDisabled, droppableId, items, children, emptyComponent: EmptyComponent } = props;

  return (
    <Droppable isDropDisabled={isDropDisabled} droppableId={droppableId}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {EmptyComponent && !items.length ? <EmptyComponent /> : null}
          {items.map((item: any, index: any) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getStyle(
                      provided.draggableProps.style,
                      snapshot
                    )}
                  >
                    {isValidElement(children) ? cloneElement(children, { ...item }) : null}
                  </div>
                );
              }}
            </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  );
}