import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  userDataErrorSelector,
  userDataSelector,
} from '../../Store/HomeScreen/selectors';
import {fetchUserData} from '../../Store/HomeScreen/actions';

export const useFetchUserData = () => {
  const user = useSelector(userDataSelector);
  const error = useSelector(userDataErrorSelector);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {user, error};
};
