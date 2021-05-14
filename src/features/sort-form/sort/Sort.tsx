import { useStore } from 'effector-react';
import { $sortType, sortTypeChanged } from './model';
import { SortButton } from '../../../ui/SortButton';
import { MetaBySortType, SortType } from '../const';

export const Sort = () => {
  const sortType = useStore($sortType);

  return (
    <>
      {Object.values(SortType).map((type) => (
        <SortButton
          key={type}
          type={type}
          name="alphabet-sort"
          inputType="radio"
          isChecked={type === sortType}
          icon={MetaBySortType[type].icon}
          ariaLabel={MetaBySortType[type].ariaLabel}
          onChange={sortTypeChanged}
        />
      ))}
    </>
  );
};