import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import Header from '../../Components/UIKIt/Header';
import * as mockContent from '../../../mockContnent.json';
import UITextInput from '../../Components/UIKIt/UITextInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import ErrorMessage from '../../Components/UIKIt/form/ErrorMessage';
import {useLogin} from '../../hooks/login';

const schemeLogin = yup.object({
  userName: yup
    .string()
    .required(mockContent.validateNewRecipientName)
    .min(3, mockContent.minLengthNewRecipientName),
  password: yup
    .string()
    .min(6, '6 minimum characters')
    .max(8, '8 maximum characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?!.*\W).{6,8}$/,
      'requird number and characters',
    )
    .required('Required field'),
});
const LoginScreen = () => {
  const onSubmit = useLogin();
  return (
    <View style={styles.container}>
      <Header style={styles.title} title={mockContent.loginTitle} />
      <View>
        <Formik
          style={styles.formikContainer}
          validationSchema={schemeLogin}
          initialValues={{userName: '', password: ''}}
          onSubmit={onSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldTouched,
            values,
            isValid,
            errors,
            touched,
          }) => {
            const userNAmeValid = touched.userName && errors.userName;
            const passwordValid = touched.userName && errors.password;
            return (
              <View style={styles.formik}>
                <View style={styles.flex1}>
                  <View>
                    <UITextInput
                      onChangeText={handleChange('userName')}
                      onBlur={handleBlur('userName')}
                      value={values.userName}
                      onEndEditing={() => setFieldTouched('userName')}
                      placeHolder={mockContent.loginUserNamePlaceholder}
                    />
                    {userNAmeValid && (
                      <View style={styles.errorContainer}>
                        <ErrorMessage error={errors.userName} />
                      </View>
                    )}
                  </View>
                  <View style={styles.accountContainer}>
                    <UITextInput
                      isPassword
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      onEndEditing={() => setFieldTouched('password')}
                      value={values.password}
                      placeHolder={mockContent.loginUserPasswordPlaceholder}
                    />
                    {passwordValid && (
                      <View style={styles.errorContainer}>
                        <ErrorMessage error={errors.password} />
                      </View>
                    )}
                  </View>
                </View>

                <View style={styles.buttonContainer}>
                  <Button
                    disabled={!isValid}
                    title={mockContent.loginUserBtn}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 34,
  },
  formik: {
    flex: 1,
    marginTop: 32,
  },
  formikContainer: {
    marginTop: 32,
  },
  flex1: {
    flex: 1,
  },
  errorContainer: {
    height: 25,
    alignItems: 'flex-end',
  },
  accountContainer: {
    marginTop: 60,
  },
  buttonContainer: {
    height: 60,
    marginBottom: 24,
  },
});
