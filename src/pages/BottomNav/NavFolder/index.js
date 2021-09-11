import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './style';

const NavFolder = () => {
  const homeText = 'Folder Screen';
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>{homeText}</Text>
    </SafeAreaView>
  );
};

export default NavFolder;
