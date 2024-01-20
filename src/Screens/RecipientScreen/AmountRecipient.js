import {StyleSheet, View, Button, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../Components/UIKIt/Header';
import * as mockContent from '../../../mockContnent.json';
import UITextInput from '../../Components/UIKIt/UITextInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import ErrorMessage from '../../Components/UIKIt/form/ErrorMessage';
import {useSubmitTransaction} from '../../hooks/formik';
import {userBalanceSelector} from '../../Store/HomeScreen/selectors';
import {statusTransactionSelector} from '../../Store/Transactions/selectors';
import Colors from '../../Components/UIKIt/Colors';
import {useNavigation} from '@react-navigation/native';
const ERROR_STATUS = 'fail';
const LOADING_STATUS = 'start';
const schemeAmount = (balance = 2) =>
  yup.object({
    amount: yup
      .number()
      .required(mockContent.transactionsProcessRequire)
      .min(
        1,
        mockContent.transactionsProcessValidate.replace(/amount/, balance),
      )
      .max(
        balance,
        mockContent.transactionsProcessValidate.replace(/amount/, balance),
      ),
  });
const AmountRecipient = () => {
  const onSubmit = useSubmitTransaction();
  const balance = useSelector(userBalanceSelector);
  const statusTransaction = useSelector(statusTransactionSelector);
  const navigation = useNavigation();
  if (statusTransaction === ERROR_STATUS) {
    navigation.replace('ErrorRecipient');
  }
  return (
    <View style={styles.container}>
      <Header
        style={styles.title}
        title={mockContent.transactionsProcessTitle}
      />
      <View>
        <Formik
          style={styles.formikContainer}
          validationSchema={schemeAmount(balance)}
          initialValues={{amount: ''}}
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
            return (
              <View style={styles.formik}>
                <View style={styles.flex1}>
                  <View>
                    <UITextInput
                      onChangeText={handleChange('amount')}
                      onBlur={handleBlur('amount')}
                      value={values.amount}
                      onEndEditing={() => setFieldTouched('amount')}
                      placeHolder={mockContent.transactionsProcessPlaceholder}
                    />
                    {!!errors.amount && (
                      <View style={styles.errorContainer}>
                        <ErrorMessage error={errors.amount} />
                      </View>
                    )}
                  </View>
                </View>

                <View style={styles.buttonContainer}>
                  {statusTransaction === LOADING_STATUS && (
                    <ActivityIndicator
                      size="small"
                      color={Colors.electric_violet}
                    />
                  )}

                  {statusTransaction === 'pending' && (
                    <Button
                      disabled={!isValid}
                      title={mockContent.transactionsProcessBtn}
                      onPress={handleSubmit}
                    />
                  )}
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default AmountRecipient;

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
  buttonContainer: {
    height: 60,
  },
});
