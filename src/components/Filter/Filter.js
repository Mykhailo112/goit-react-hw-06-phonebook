import { FilterDiv } from './Filter.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filtersSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  return (
    <FilterDiv>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </FilterDiv>
  );
};
