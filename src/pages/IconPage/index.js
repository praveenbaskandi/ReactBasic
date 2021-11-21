import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Header from '../../UI/Header';
import * as S from './style';

const IconPage = () => {
  const heading = 'Icon Page';
  const navigation = useNavigation();
  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <S.Contain>
        <S.IconView name="search-bold" font={10} />
        <S.IconView name="visibility" font={10} />
        <S.IconView name="sharing-fill" font={10} />
        <S.IconView name="thumbs_down" font={10} />
        <S.IconView name="thumbs_up" font={10} />
        <S.IconView name="no-income" font={10} />
      </S.Contain>
      <S.Contain>
        <S.IconRed name="budget_graph" font={20} />
        <S.IconRed name="transport" font={20} />
        <S.IconRed name="bills" font={20} />
        <S.IconRed name="info" font={20} />
        <S.IconRed name="edit" font={20} />
        <S.IconRed name="play-circled2" font={20} />
      </S.Contain>
      <S.Contain>
        <S.IconGreen name="institution" font={20} />
        <S.IconGreen name="hourglass" font={20} />
        <S.IconGreen name="warning" font={20} />
        <S.IconGreen name="checkbox-fill" font={20} />
      </S.Contain>
      <S.Contain>
        <S.IconYellow name="star" font={20} />
        <S.IconYellow name="tick-circle" font={20} />
        <S.IconYellow name="grocery" font={20} />
        <S.IconYellow name="general" font={20} />
      </S.Contain>
    </S.Container>
  );
};
export default IconPage;
