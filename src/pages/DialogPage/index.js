import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ButtonUI from '../../UI/Button';
import DialogImg from './DialogImgPage';
import Header from '../../UI/Header';
import styles from './style';

const ButtonPage = () => {
  const heading = 'Dialog Page';
  const [showDialog, updateShow] = useState(false);
  const navigation = useNavigation();
  const clickMe = 'Click Me!';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header text={heading} click={navigation.goBack} />
      <ButtonUI
        btnText={clickMe}
        style={1}
        click={() => {
          updateShow(true);
        }}
      />
      <ButtonUI btnText={clickMe} style={2} />
      {showDialog ? <DialogImg /> : null}
    </SafeAreaView>
  );
};

export default ButtonPage;
