import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  toastSuccess,
  toastError,
  toastWarning,
  toastNormal,
} from '../../UI/ToastController';
import Header from '../../UI/Header';
import Button from '../../UI/Button';
import * as S from './style';

const ToastPage = () => {
  const heading = 'Toast Page';
  const navigation = useNavigation();
  const clickMeSuccess = 'Click Me Success!';
  const clickMeError = 'Click Me Error!';
  const clickMeWarning = 'Click Me Warning!';
  const clickMeNormal = 'Click Me Normal!';

  const onPressSuccess = () => {
    toastSuccess(clickMeSuccess, clickMeSuccess);
  };

  const onPressError = () => {
    toastError(clickMeError, clickMeError);
  };

  const onPressWarning = () => {
    toastWarning(clickMeWarning, clickMeWarning);
  };

  const onPressNormal = () => {
    toastNormal(clickMeNormal, clickMeNormal);
  };

  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <S.ButtonContainer>
        <Button click={onPressSuccess} btnText={clickMeSuccess} />
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button click={onPressError} btnText={clickMeError} />
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button click={onPressWarning} btnText={clickMeWarning} />
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button click={onPressNormal} btnText={clickMeNormal} />
      </S.ButtonContainer>
    </S.Container>
  );
};
export default ToastPage;
