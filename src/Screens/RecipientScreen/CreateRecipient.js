import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import Header from '../../Components/UIKIt/Header';
import * as mockContent from '../../../mockContnent.json';
import UITextInput from '../../Components/UIKIt/UITextInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import ErrorMessage from '../../Components/UIKIt/form/ErrorMessage';
import {useSubmitNewRecipient} from '../../hooks/formik';
const schemeCreateRecipient = yup.object({
  name: yup
    .string()
    .required(mockContent.validateNewRecipientName)
    .min(3, mockContent.minLengthNewRecipientName),
  acount: yup
    .string()
    .required(mockContent.validateNewRecipientAccount)
    .matches(/^\d+$/, mockContent.onlyNumbersNewRecipientAccount)
    .min(6, mockContent.minLengthNewRecipientAccount),
});
const CreateRecipient = () => {
  const onSubmit = useSubmitNewRecipient();
  return (
    <View style={styles.container}>
      <Header style={styles.title} title={mockContent.addNewRecipient} />
      <View>
        <Formik
          style={styles.formikContainer}
          validationSchema={schemeCreateRecipient}
          initialValues={{name: '', acount: ''}}
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
            const nameValid = touched.name && errors.name;
            const accountValid = touched.acount && errors.acount;
            return (
              <View style={styles.formik}>
                <View style={styles.flex1}>
                  <View>
                    <UITextInput
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      onEndEditing={() => setFieldTouched('name')}
                      placeHolder={mockContent.addNewRecipientName}
                    />
                    {nameValid && (
                      <View style={styles.errorContainer}>
                        <ErrorMessage error={errors.name} />
                      </View>
                    )}
                  </View>
                  <View style={styles.accountContainer}>
                    <UITextInput
                      onChangeText={handleChange('acount')}
                      onBlur={handleBlur('acount')}
                      onEndEditing={() => setFieldTouched('acount')}
                      value={values.acount}
                      placeHolder={mockContent.addNewRecipientAccount}
                    />
                    {accountValid && (
                      <View style={styles.errorContainer}>
                        <ErrorMessage error={errors.acount} />
                      </View>
                    )}
                  </View>
                </View>

                <View style={styles.buttonContainer}>
                  <Button
                    disabled={!isValid}
                    title={mockContent.addNewRecipientBtn}
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

export default CreateRecipient;

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
  },
});
