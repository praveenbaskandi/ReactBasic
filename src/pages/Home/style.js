import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../../UI/Text';
import {Colors} from '../../utils/Colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Text = styled(Title)`
  font-size: ${scale(10)};
  color: ${Colors.white};
  text-align: center;
  line-height: ${scale(10)};
`;

export const ContainerCover = styled.TouchableOpacity`
  background-color: ${Colors.glBlue};
  margin-horizontal: ${scale(10)};
  margin-vertical: ${scale(5)};
  border-radius: ${scale(5)};
  height: ${scale(25)};
  justify-content: center;
`;
