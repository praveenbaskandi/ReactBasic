import React from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ButtonUI from '../../UI/Button';
import Header from '../../UI/Header';
import styles from './style';

const ButtonPage = () => {
  const heading = 'Button Page';
  const navigation = useNavigation();
  const clickMe = 'Click Me!';
  return (
    <SafeAreaView style={styles.container}>
      <Header text={heading} click={navigation.goBack} />
      <ButtonUI btnText={clickMe} mt={10} />
      <ButtonUI btnText={clickMe} mt={10} />
    </SafeAreaView>
  );
};

export default ButtonPage;
