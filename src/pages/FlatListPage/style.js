import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../../UI/Text';
import {Colors} from '../../utils/Colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
`;

export const ItemContainer = styled.View`
  margin-top: 10px;
  margin-horizontal: 20px;
  border-radius: 10px;
  background-color: ${Colors.error};
`;

export const Text = styled(Title)`
  font-size: ${({font = 0}) => scale(font)};
  color: ${Colors.white};
  text-align: center;
  line-height: ${scale(15)};
`;
