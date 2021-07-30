import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {string, number, func} from 'prop-types';

import styles from './style.js';

const ButtonUI = ({btnText, style, click}) => {
  const styleSelect = () => {
    if (style === 1) {
      return styles.buttonOrange;
    }
    if (style === 2) {
      return styles.buttonGrey;
    }
    return styles.buttonGrey;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styleSelect(style)} onPress={click}>
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

ButtonUI.propTypes = {
  btnText: string.isRequired,
  style: number.isRequired,
  click: func.isRequired,
};

export default ButtonUI;
