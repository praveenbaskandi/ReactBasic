import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import LocalStorage from '../../utils/localStorage';
import ButtonUI from '../../UI/Button';
import Header from '../../UI/Header';
import {Colors} from '../../utils/Colors';
import styles from './style';

const LocalStoragePage = () => {
  const [enterText, setEnterText] = useState('');
  const [localText, setLocalText] = useState('');
  const heading = 'Local Storage Page';
  const clickMe = 'Save Locally!';
  const navigation = useNavigation();

  useEffect(() => {
    const checkForPaymentFailure = async () => {
      const data = await LocalStorage.getItem('localData');
      if (data !== null) {
        setLocalText(data);
      }
    };
    checkForPaymentFailure();
  }, []);

  const setDataLocally = () => {
    LocalStorage.setItem('localData', enterText);
  };

  return (
    <SafeAreaView style={styles.containerTop}>
      <Header text={heading} click={navigation.goBack} />
      <View style={styles.container}>
        <Text style={styles.textStyle}>{localText}</Text>
        <TextInput
          style={styles.input1}
          placeholder="Enter Name"
          keyboardType="default"
          onChangeText={text => setEnterText(text)}
          placeholderTextColor={Colors.glGrey}
        />
        <ButtonUI btnText={clickMe} style={1} click={setDataLocally} />
      </View>
    </SafeAreaView>
  );
};
export default LocalStoragePage;
