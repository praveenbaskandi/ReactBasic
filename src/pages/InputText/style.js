import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/Colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Input = styled.TextInput`
  font-size: ${scale(14)};
  line-height: ${scale(14)};
  border-radius: ${scale(4)};
  height: ${scale(40)};
  padding-horizontal: ${scale(5)};
  margin-horizontal: ${scale(20)};
  margin-top: ${scale(10)};
  border-width: 1px;
  color: ${Colors.glBlack};
`;
