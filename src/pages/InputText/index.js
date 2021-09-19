import React from 'react';

import Header from '../../UI/Header';
import * as S from './style';

const InputText = ({navigation}) => {
  const heading = 'Input Text Page';
  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <S.Input placeholder="Enter Name" keyboardType="default" />
      <S.Input placeholder="Enter Number" keyboardType="numeric" />
      <S.Input placeholder="Enter Email" keyboardType="default" />
    </S.Container>
  );
};

export default InputText;
