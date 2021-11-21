import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import LocalStorage from '../../utils/localStorage';
import ButtonUI from '../../UI/Button';
import Header from '../../UI/Header';
import {Colors} from '../../utils/Colors';
import * as S from './style';

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
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <S.MidContainer>
        <S.Text>{localText}</S.Text>
        <S.Input
          placeholder="Enter Name"
          keyboardType="default"
          onChangeText={text => setEnterText(text)}
          placeholderTextColor={Colors.glGrey}
        />
        <ButtonUI btnText={clickMe} style={1} click={setDataLocally} />
      </S.MidContainer>
    </S.Container>
  );
};
export default LocalStoragePage;
