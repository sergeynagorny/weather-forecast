import { useStore } from 'effector-react';
import { SortButton } from '../../../ui/SortButton';
import { FilterType, MetaByFilterType } from '../const';
import { $filters, filterTypeChanged } from './model';

export const Filter = () => {
  const filters = useStore($filters);
  return (
    <>
      {Object.values(FilterType).map((filter) => (
        <SortButton
          key={filter}
          type={filter}
          name="weather-conditions"
          inputType="checkbox"
          isChecked={filters.has(filter)}
          icon={MetaByFilterType[filter].icon}
          ariaLabel={MetaByFilterType[filter].ariaLabel}
          onChange={filterTypeChanged}
        />
      ))}
    </>
  );
};