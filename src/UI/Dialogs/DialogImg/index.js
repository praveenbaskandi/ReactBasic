import React from 'react';
import {func, string, bool} from 'prop-types';

import Button from '../../Button';
import Dialog from '../Dialog';
import * as S from './style';

const DialogImg = ({
  logo,
  title,
  description,
  subtitle,
  subtitleDescription,
  isCrossEnable,
  buttonText,
  buttonClick,
  crossButtonClick,
  ...rest
}) => (
  <Dialog withCustomContainer centerInScreen {...rest}>
    <S.Container>
      {isCrossEnable ? (
        <S.CloseIcon name="bigclose" onPress={crossButtonClick} />
      ) : null}
      <S.ImageDialog source={logo} />
      <S.TitleText>{title}</S.TitleText>
      {subtitle ? <S.SubText>{subtitle}</S.SubText> : null}
      <Button btnText={buttonText} click={buttonClick} mt={10} mb={10} />
    </S.Container>
  </Dialog>
);

DialogImg.propTypes = {
  buttonText: string.isRequired,
  buttonClick: func,
  logo: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  crossButtonClick: func,
  subtitle: string,
  subtitleDescription: string,
  isCrossEnable: bool,
};

DialogImg.defaultProps = {
  subtitle: '',
  crossButtonClick: () => {},
  buttonClick: () => {},
  subtitleDescription: '',
  isCrossEnable: false,
};

export default DialogImg;
