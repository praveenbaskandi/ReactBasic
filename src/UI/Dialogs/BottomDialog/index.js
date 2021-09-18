import React from 'react';
import {arrayOf, node, oneOfType, string, func} from 'prop-types';

import Button from '../../Button';
import Dialog from '../Dialog';
import * as S from './style';

const BottomDialog = ({
  buttons,
  title,
  subTitle,
  btnText,
  buttonClick,
  children,
  ...rest
}) => {
  return (
    <Dialog {...rest}>
      <S.Container showsVerticalScrollIndicator={false}>
        {title && <S.TitleText>{title}</S.TitleText>}
        {subTitle && <S.SubText>{subTitle}</S.SubText>}
        <>{children}</>
        <Button btnText={btnText} click={buttonClick} mt={20} />
      </S.Container>
    </Dialog>
  );
};

BottomDialog.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  buttonClick: func.isRequired,
  title: string,
  subTitle: string,
  btnText: string,
};

BottomDialog.defaultProps = {
  children: null,
};

export default BottomDialog;
