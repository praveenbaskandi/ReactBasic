import React from 'react';
import {ScrollView, Text} from 'react-native';
import {arrayOf, node, oneOfType, string, func} from 'prop-types';

import Button from '../../Button';
import Dialog from '../Dialog';
import style from './style';

const BottomDialog = ({
  buttons,
  title,
  subTitle,
  btnText,
  buttonClick,
  children,
  ...rest
}) => {
  return (
    <Dialog {...rest}>
      <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        {title && <Text style={style.title}>{title}</Text>}
        {subTitle && <Text style={style.subTitle}>{subTitle}</Text>}
        <>{children}</>
        <Button btnText={btnText} style={1} click={buttonClick} />
      </ScrollView>
    </Dialog>
  );
};

BottomDialog.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  buttonClick: func.isRequired,
  title: string,
  subTitle: string,
  btnText: string,
};

BottomDialog.defaultProps = {
  children: null,
};

export default BottomDialog;
