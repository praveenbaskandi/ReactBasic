import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './style';

const NavHome = () => {
  const homeText = 'Home Screen';
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>{homeText}</Text>
    </SafeAreaView>
  );
};

export default NavHome;
