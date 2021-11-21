import React from 'react';
import {shape, string} from 'prop-types';

import {windowWidth} from '../../utils/dimension';
import * as S from './style';

const PagePage = ({data}) => {
  return (
    <S.PageView width={windowWidth}>
      <S.TextHead>{data.heading}</S.TextHead>
      <S.ImageView source={data.image} resizeMode="contain" />
      <S.TextHead>{data.subHeading}</S.TextHead>
    </S.PageView>
  );
};

PagePage.propTypes = {
  data: shape({
    heading: string.isRequired,
    subHeading: string.isRequired,
    image: string.isRequired,
  }),
};

export default PagePage;
