import React from 'react';
import {View, Text, Image} from 'react-native';
import {func, string, bool} from 'prop-types';

import Button from '../../Button';
import Icon from '../../Icons';
import Dialog from '../Dialog';
import styles from './style';

const DialogImg = ({
  logo,
  title,
  description,
  subtitle,
  subtitleDescription,
  isCrossEnable,
  buttonText,
  buttonClick,
  crossButtonClick,
  ...rest
}) => (
  <Dialog withCustomContainer centerInScreen {...rest}>
    <View style={styles.dialogContainer}>
      {isCrossEnable ? (
        <Icon
          name="star-empty"
          size={10}
          color="#000000"
          style={styles.icon}
          onPress={crossButtonClick}
        />
      ) : null}
      <Image style={styles.image} source={logo} />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subTitle}>{subtitle}</Text> : null}
      <Button btnText={buttonText} style={1} click={buttonClick} />
    </View>
  </Dialog>
);

DialogImg.propTypes = {
  buttonText: string.isRequired,
  buttonClick: func,
  logo: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  crossButtonClick: func,
  subtitle: string,
  subtitleDescription: string,
  isCrossEnable: bool,
};

DialogImg.defaultProps = {
  subtitle: '',
  crossButtonClick: () => {},
  buttonClick: () => {},
  subtitleDescription: '',
  isCrossEnable: false,
};

export default DialogImg;
