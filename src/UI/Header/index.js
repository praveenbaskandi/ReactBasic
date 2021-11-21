import React from 'react';
import {string, func, number} from 'prop-types';

import * as S from './style';

const Header = ({text, click, textFont}) => {
  return (
    <S.Container>
      <S.BackIcon name="keyboard_arrow_left" onPress={click} />
      <S.Text font={textFont}>{text}</S.Text>
    </S.Container>
  );
};

Header.propTypes = {
  text: string.isRequired,
  click: func.isRequired,
  textFont: number,
};

Header.defaultProps = {
  textFont: 15,
};

export default Header;
