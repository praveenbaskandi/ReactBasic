import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './style';

const NavSetting = () => {
  const homeText = 'Setting Screen';
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>{homeText}</Text>
    </SafeAreaView>
  );
};

export default NavSetting;
