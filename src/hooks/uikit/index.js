import React from 'react';
import {Animated, Easing} from 'react-native';
export const useFocusTextInput = () => {
  const [isFocus, setIsFocus] = React.useState(false);

  const handleOnBlur = () => {
    setIsFocus(false);
  };
  const handleOnfFocus = () => {
    setIsFocus(true);
  };

  return [isFocus, handleOnBlur, handleOnfFocus];
};

export const useAnimatedPlaceHolder = (value = '', isFocus = false) => {
  const placeHolderAnime = React.useRef(
    new Animated.Value(!value ? 1 : 0),
  ).current;

  React.useEffect(() => {
    Animated.timing(placeHolderAnime, {
      useNativeDriver: true,
      duration: 130,
      toValue: isFocus || value ? 1 : 0,
      easing: Easing.linear,
    }).start();
  });
  return placeHolderAnime;
};
