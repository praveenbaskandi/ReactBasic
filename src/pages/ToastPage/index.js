import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  toastSuccess,
  toastError,
  toastWarning,
  toastNormal,
} from '../../UI/ToastController';
import Header from '../../UI/Header';
import Button from '../../UI/Button';
import styles from './style';

const ToastPage = () => {
  const heading = 'Toast Page';
  const navigation = useNavigation();
  const clickMeSuccess = 'Click Me Success!';
  const clickMeError = 'Click Me Error!';
  const clickMeWarning = 'Click Me Warning!';
  const clickMeNormal = 'Click Me Normal!';

  const onPressSuccess = () => {
    toastSuccess(clickMeSuccess, clickMeSuccess);
  };

  const onPressError = () => {
    toastError(clickMeError, clickMeError);
  };

  const onPressWarning = () => {
    toastWarning(clickMeWarning, clickMeWarning);
  };

  const onPressNormal = () => {
    toastNormal(clickMeNormal, clickMeNormal);
  };

  return (
    <SafeAreaView>
      <Header text={heading} click={navigation.goBack} />
      <View style={styles.container}>
        <Button click={onPressSuccess} btnText={clickMeSuccess} />
      </View>
      <View style={styles.container}>
        <Button click={onPressError} btnText={clickMeError} />
      </View>
      <View style={styles.container}>
        <Button click={onPressWarning} btnText={clickMeWarning} />
      </View>
      <View style={styles.container}>
        <Button click={onPressNormal} btnText={clickMeNormal} />
      </View>
    </SafeAreaView>
  );
};
export default ToastPage;
