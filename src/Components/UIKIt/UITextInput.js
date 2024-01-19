import {StyleSheet, View, TextInput, Animated, Text} from 'react-native';
import React from 'react';
import {useAnimatedPlaceHolder, useFocusTextInput} from '../../hooks/uikit';
import Colors from './Colors';
const NOOP = () => {};
const UITextInput = props => {
  const refInput = React.useRef(null);
  const [isFocus, onBlur, onFocus] = useFocusTextInput();
  const placeHolderAnime = useAnimatedPlaceHolder(isFocus, props.value);
  return (
    <View style={styles.inputContainer}>
      <Animated.View
        onPress={() => refInput.current.focus()}
        style={[
          styles.label,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            transform: [
              {
                translateY: placeHolderAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -25],
                }),
              },
              {
                translateX: placeHolderAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -6],
                }),
              },
              {
                scale: placeHolderAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                }),
              },
            ],
            zIndex: 1,
          },
        ]}>
        <Text>{props.placeHolder}</Text>
      </Animated.View>
      <TextInput
        ref={refInput}
        secureTextEntry={props.isPassword}
        onBlur={onBlur}
        onFocus={onFocus}
        value={props.value}
        onEndEditing={props.onEndEditing}
        style={styles.input}
        autoComplete={props.autoComplete}
        spellCheck={props.spellCheck}
        onChangeText={text => {
          props.onChangeText(text);
          props.handleSubmit && props.handleSubmit();
        }}
      />
    </View>
  );
};
UITextInput.defaultProps = {
  onChangeText: NOOP,
  handleSubmit: NOOP,
  onEndEditing: NOOP,
  value: '',
  isPassword: false,
  placeHolder: 'placeHolder',
  autoComplete: 'off',
  spellCheck: false,
};
export default UITextInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: Colors.electric_violet,
    borderBottomWidth: 1,
  },
  input: {
    color: Colors.black,
    paddingBottom: 8,
    fontSize: 16,
    textAlign: 'right',
  },
  label: {
    position: 'absolute',
    fontSize: 16,
    right: 0,
    lineHeight: 20,
    color: 'rgb(145, 145, 145)',
    textAlign: 'right',
  },
});
