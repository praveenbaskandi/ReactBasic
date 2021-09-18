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
        <S.IconView name="star-empty" font={10} />
        <S.IconView name="th-list" font={10} />
        <S.IconView name="th" font={10} />
        <S.IconView name="ok-circled" font={10} />
        <S.IconView name="ok" font={10} />
        <S.IconView name="mail-alt" font={10} />
      </S.Contain>
      <S.Contain>
        <S.IconRed name="glass" font={20} />
        <S.IconRed name="videocam" font={20} />
        <S.IconRed name="thumbs-up-alt" font={20} />
        <S.IconRed name="thumbs-down-alt" font={20} />
        <S.IconRed name="mic" font={20} />
        <S.IconRed name="soccer-ball" font={20} />
      </S.Contain>
      <S.Contain>
        <S.IconGreen name="folder" font={20} />
        <S.IconGreen name="pencil" font={20} />
        <S.IconGreen name="bell-alt" font={20} />
        <S.IconGreen name="comment" font={20} />
      </S.Contain>
      <S.Contain>
        <S.IconYellow name="basket" font={20} />
        <S.IconYellow name="calendar" font={20} />
        <S.IconYellow name="phone" font={20} />
        <S.IconYellow name="cog" font={20} />
      </S.Contain>
    </S.Container>
  );
};
export default IconPage;
