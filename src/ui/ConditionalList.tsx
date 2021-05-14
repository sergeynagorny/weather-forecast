import React, { ElementType, FC } from 'react';
import { Preloader } from './Preloader';

type TConditionalListProps = {
  isLoading?: boolean;
  itemsCount?: number;
  emptyComponent?: ElementType;
}

export const ConditionalList: FC<TConditionalListProps> = (props) => {
  const { isLoading, itemsCount, emptyComponent: EmptyComponent, children } = props;

  if (isLoading) return <Preloader />
  if (EmptyComponent && !itemsCount) return <EmptyComponent />

  return <>{children}</>;
};