import styled from 'styled-components/native';

import {Title} from '../../UI/Text';
import {Colors} from '../../utils/Colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const TextHead = styled(Title)`
  color: ${Colors.glBlack};
  font-size: 15px;
  margin-horizontal: 20px;
  line-height: 15px;
  margin-top: 20px;
  text-align: center;
`;
