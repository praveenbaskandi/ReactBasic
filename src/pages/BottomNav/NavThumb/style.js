import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../../../UI/Text';
import {Colors} from '../../../utils/Colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(Title)`
  font-size: ${scale(15)};
  color: ${Colors.glBlack};
  text-align: center;
  align-self: center;
  line-height: ${scale(15)};
`;
