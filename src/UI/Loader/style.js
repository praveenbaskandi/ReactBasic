import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';

export const Loading = styled(LottieView)`
  width: ${({w = 0}) => scale(w)};
  height: ${({h = 0}) => scale(h)};
`;
