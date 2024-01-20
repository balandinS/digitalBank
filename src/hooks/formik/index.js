import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RecipientListSelector} from '../../Store/RecipientList/selectors';
import {addRecipientList} from '../../Store/RecipientList/actions';
import * as mockContent from '../../../mockContnent.json';
import {useNavigation} from '@react-navigation/native';
import {startTransaction} from '../../Store/Transactions/actions';

export const useSubmitNewRecipient = () => {
  const recipientList = useSelector(RecipientListSelector);
  const dispatch = useDispatch();
  const naavigation = useNavigation();
  const handleSubmit = ({name, acount}) => {
    const findExistAccount = recipientList.find(recipientItem => {
      if (recipientItem.acount === acount) {
        return recipientItem;
      }
    });
    if (findExistAccount) {
      Alert.alert(mockContent.existNewRecipientAccount);
      return;
    }

    dispatch(addRecipientList({name, acount}));
    naavigation.goBack();
    return;
  };

  return handleSubmit;
};

export const useSubmitTransaction = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({amount}) => {
    if (amount) {
      dispatch(startTransaction());
    }
  };

  return handleSubmit;
};
