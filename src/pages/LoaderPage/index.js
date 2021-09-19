import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Header from '../../UI/Header';
import Loader from '../../UI/Loader';
import * as S from './style';

const LoaderPage = () => {
  const heading = 'Loading Page';
  const navigation = useNavigation();

  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <Loader size={10} />
      <Loader size={20} />
      <Loader size={30} />
      <Loader size={40} />
      <Loader size={50} />
    </S.Container>
  );
};
export default LoaderPage;
