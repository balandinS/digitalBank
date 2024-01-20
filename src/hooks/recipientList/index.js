import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRecipientList} from '../../Store/RecipientList/actions';
import {RecipientListSelector} from '../../Store/RecipientList/selectors';
const regexNumber = new RegExp(/\d+/, 'gi');
export const useOnChangeValue = () => {
  const [value, setValue] = React.useState('');

  const onChangeText = text => {
    setValue(text);
  };

  return [value, onChangeText];
};
export const useFetchRecipientList = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRecipientList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useFilteredList = value => {
  const originalList = useSelector(RecipientListSelector);
  const isLoading = !originalList; // before fetching list equal null
  const filterList = React.useMemo(() => {
    if (originalList?.length) {
      if (!value) {
        return originalList;
      }
      if (regexNumber.test(value)) {
        return originalList.filter(({acount}) => acount.includes(value));
      }
      return originalList.filter(({name}) => name.startsWith(value));
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, originalList]);
  return [filterList, isLoading];
};
