import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../UI/Header';
import Loader from '../../UI/Loader';
import styles from './style';

const LoaderPage = () => {
  const heading = 'Loading Page';
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Header text={heading} click={navigation.goBack} />
      <View style={styles.container}>
        <Loader size={10} />
        <Loader size={20} />
        <Loader size={30} />
        <Loader size={40} />
        <Loader size={50} />
      </View>
    </View>
  );
};
export default LoaderPage;
