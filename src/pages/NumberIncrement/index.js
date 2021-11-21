import React from 'react';
import {useDispatch} from 'react-redux';

import {updateIncrementData} from '../../redux/number-increment/actions';
import Header from '../../UI/Header';
import Button from '../../UI/Button';
import useSelect from './selector';
import * as S from './style';

const IncrementNumber = ({navigation}) => {
  const dispatch = useDispatch();
  const {incrementData} = useSelect();
  const clickMe = 'Click Me !';
  const heading = 'Increment Number';
  const onPressButton = () => {
    const added = Number(incrementData) + 1;
    dispatch(updateIncrementData(added.toString()));
  };

  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <S.TextHead>{incrementData}</S.TextHead>
      <S.ButtonContainer>
        <Button click={onPressButton} btnText={clickMe} />
      </S.ButtonContainer>
    </S.Container>
  );
};
export default IncrementNumber;
