import {useNavigation} from '@react-navigation/native';
export const useLogin = () => {
  const navigation = useNavigation();
  const onsubmit = () => {
    navigation.replace('HomeScreen');
  };

  return onsubmit;
};
