import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../../Text';
import {Colors} from '../../../utils/Colors';

export const Container = styled.ScrollView`
  width: 100%;
  background-color: ${Colors.white};
  padding-bottom: ${scale(10)};
`;

export const TitleText = styled(Title)`
  font-size: ${scale(20)};
  color: ${Colors.glBlack};
  text-align: center;
  line-height: ${scale(20)};
`;

export const SubText = styled(Title)`
  font-size: ${scale(10)};
  color: ${Colors.glBlack};
  text-align: center;
  line-height: ${scale(15)};
`;
