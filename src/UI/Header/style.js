import styled from 'styled-components/native';
import {scale, verticalScale} from 'react-native-size-matters';

import {statusbarHeight} from '../../utils/dimension';
import {Colors} from '../../utils/Colors';
import {Title} from '../Text';
import Icon from '../../UI/Icons';

export const Container = styled.View`
  width: 100%;
  margin-top: ${statusbarHeight};
  background-color: ${Colors.white};
  height: ${verticalScale(40)};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-width: ${scale(1)};
  border-color: ${Colors.glDivider};
  padding-horizontal: ${scale(20)};
`;

export const Text = styled(Title)`
  font-size: ${({font = 0}) => scale(font)};
  color: ${Colors.glTextGen};
  text-align: center;
  line-height: ${scale(15)};
`;

export const BackIcon = styled(Icon)`
  font-size: ${scale(20)};
  position: absolute;
  left: ${scale(20)};
  color: ${Colors.glTextGen};
`;
