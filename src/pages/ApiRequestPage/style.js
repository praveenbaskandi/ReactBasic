import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../../UI/Text';
import {Colors} from '../../utils/Colors';
import Icon from '../../UI/Icons';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
`;

export const IconRed = styled(Icon)`
  font-size: ${({font = 0}) => scale(font)};
  color: ${Colors.error};
  margin-right: ${scale(5)};
`;

export const Text = styled(Title)`
  font-size: ${({font = 0}) => scale(font)};
  color: ${Colors.glTextGen};
  text-align: center;
  line-height: ${scale(15)};
`;

export const LoaderView = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  background-color: ${Colors.white};
`;
