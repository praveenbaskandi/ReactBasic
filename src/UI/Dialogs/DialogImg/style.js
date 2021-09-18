import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../../Text';
import {Colors} from '../../../utils/Colors';
import Icon from '../../../UI/Icons';

export const Container = styled.View`
  width: 100%;
  align-self: center;
  align-items: center;
  border-radius: ${scale(15)};
  max-width: ${scale(300)};
  background-color: ${Colors.white};
`;

export const CloseIcon = styled(Icon)`
  font-size: ${scale(20)};
  position: absolute;
  right: ${scale(20)};
  top: ${scale(20)};
  color: ${Colors.glBlack};
`;

export const TitleText = styled(Title)`
  font-size: ${scale(15)};
  color: ${Colors.glBlack};
  text-align: center;
  line-height: ${scale(15)};
`;

export const SubText = styled(Title)`
  font-size: ${scale(10)};
  color: ${Colors.glBlack};
  text-align: center;
  line-height: ${scale(15)};
`;

export const ImageDialog = styled.Image`
  height: ${scale(100)};
  width: ${scale(200)};
  color: ${Colors.glBlack};
  text-align: center;
  line-height: ${scale(15)};
`;
