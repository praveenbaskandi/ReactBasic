import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ButtonUI from '../../UI/Button';
import Header from '../../UI/Header';
import * as S from './style';

const ButtonPage = () => {
  const heading = 'Button Page';
  const navigation = useNavigation();
  const clickMe = 'Click Me!';
  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <ButtonUI btnText={clickMe} mt={10} />
      <ButtonUI btnText={clickMe} mt={10} />
    </S.Container>
  );
};

export default ButtonPage;
