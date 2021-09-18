import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/Colors';
import Icon from '../../UI/Icons';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
`;

export const Contain = styled.View`
  flex-direction: row;
  padding-horizontal: ${scale(20)};
  margin-top: ${scale(10)};
`;

export const IconView = styled(Icon)`
  font-size: ${({font = 0}) => scale(font)};
  color: ${Colors.glBlack};
  margin-right: ${scale(5)};
`;

export const IconRed = styled(Icon)`
  font-size: ${({font = 0}) => scale(font)};
  color: ${Colors.error};
  margin-right: ${scale(5)};
`;

export const IconGreen = styled(Icon)`
  font-size: ${({font = 0}) => scale(font)};
  color: ${Colors.success};
  margin-right: ${scale(5)};
`;

export const IconYellow = styled(Icon)`
  font-size: ${({font = 0}) => scale(font)};
  color: ${Colors.warning};
  margin-right: ${scale(5)};
`;
