import React from 'react';
import {number, bool} from 'prop-types';
import LottieView from 'lottie-react-native';

import loaderSource from '../../assets/common/loader.json';
import styles from './style';

const Loader = ({size}) => {
  return (
    <LottieView
      style={[styles.loader, {height: size, width: size}]}
      source={loaderSource}
      autoPlay
      loop
    />
  );
};

Loader.propTypes = {
  size: number,
  isAbsolute: bool,
};

Loader.defaultProps = {
  size: 50,
  isAbsolute: false,
};

export default Loader;
