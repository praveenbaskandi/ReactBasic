import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './style';

const NavThumb = () => {
  const homeText = 'Thumb Screen';
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>{homeText}</Text>
    </SafeAreaView>
  );
};

export default NavThumb;
