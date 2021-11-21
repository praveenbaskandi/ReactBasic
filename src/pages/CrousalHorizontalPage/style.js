import styled from 'styled-components/native';

import {Title} from '../../UI/Text';
import {Colors} from '../../utils/Colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const DotContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Dot = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 6;
  width: 6;
  margin-horizontal: 6;
  border-radius: 6;
  background-color: ${({active}) => (active ? Colors.primary : Colors.glGrey)};
`;

export const BottomContainer = styled.View`
  justify-content: center;
  margin-bottom: 20px;
`;

export const ImageView = styled.Image`
  height: 150px;
  align-self: center;
`;

export const PageView = styled.View`
  flex: 1;
  width: ${({width = 0}) => width}px;
`;

export const TextHead = styled(Title)`
  color: ${Colors.glBlack};
  font-size: 15px;
  margin-horizontal: 20px;
  line-height: 15px;
  margin-top: 20px;
  text-align: center;
`;
