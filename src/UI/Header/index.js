import React from 'react';
import {Text, StatusBar, SafeAreaView} from 'react-native';
import {string, func} from 'prop-types';

import Icon from '../../UI/Icons';
import {Colors} from '../../utils/Colors';
import styles from './style.js';

const Header = ({text, click}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Icon
        name="angle-left"
        size={30}
        color={Colors.glTextGen}
        style={styles.icon}
        onPress={click}
      />
      <Text style={styles.textStyle}>{text}</Text>
    </SafeAreaView>
  );
};

Header.propTypes = {
  text: string.isRequired,
  click: func.isRequired,
};

export default Header;
