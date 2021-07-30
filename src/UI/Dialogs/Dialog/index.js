import React from 'react';
import {View} from 'react-native';
import {
  bool,
  func,
  node,
  number,
  object,
  objectOf,
  oneOfType,
  string,
} from 'prop-types';
import Modal from 'react-native-modal';

import styles, {getDialogStyle} from './style';

const Dialog = ({
  animationIn,
  animationOut,
  avoidKeyboard,
  backdropColor,
  backdropOpacity,
  children,
  hasBackdrop,
  isModal,
  isVisible,
  onBackButtonPress,
  onBackdropPress,
  onModalHide,
  withCustomContainer,
  hideModalContentWhileAnimating,
  backdropTransitionOutTiming,
  coverScreen,
  onRequestClose,
  centerInScreen,
}) => (
  <Modal
    animationIn={animationIn}
    animationOut={animationOut}
    avoidKeyboard={avoidKeyboard}
    backdropColor={backdropColor}
    backdropOpacity={backdropOpacity}
    hasBackdrop={hasBackdrop}
    isVisible={isVisible}
    onBackButtonPress={isModal ? undefined : onBackButtonPress}
    onBackdropPress={isModal ? undefined : onBackdropPress}
    onRequestClose={onRequestClose}
    onModalHide={onModalHide}
    hideModalContentWhileAnimating={hideModalContentWhileAnimating}
    backdropTransitionOutTiming={backdropTransitionOutTiming}
    style={getDialogStyle(centerInScreen)}
    coverScreen={coverScreen}>
    {withCustomContainer ? (
      children
    ) : (
      <View style={styles.containerView}>
        <View style={styles.contentContainer}>{children}</View>
      </View>
    )}
  </Modal>
);

Dialog.propTypes = {
  animationIn: string,
  animationOut: string,
  avoidKeyboard: bool,
  hideModalContentWhileAnimating: bool,
  backdropTransitionOutTiming: number,
  backdropColor: string,
  backdropOpacity: number,
  children: oneOfType([func, node]).isRequired,
  hasBackdrop: bool,
  isModal: bool,
  isVisible: bool.isRequired,
  onBackButtonPress: func,
  onBackdropPress: func,
  onModalHide: func,
  onRequestClose: func,
  theme: objectOf(oneOfType([object, string])).isRequired,
  withCustomContainer: bool,
  coverScreen: bool,
  centerInScreen: bool,
};

Dialog.defaultProps = {
  animationIn: 'slideInUp',
  animationOut: 'slideOutDown',
  hideModalContentWhileAnimating: true,
  backdropTransitionOutTiming: 0,
  avoidKeyboard: false,
  backdropOpacity: 0.6,
  hasBackdrop: true,
  isModal: false,
  onBackButtonPress: () => null,
  onBackdropPress: () => null,
  onRequestClose: () => null,
  withCustomContainer: false,
  coverScreen: true,
  centerInScreen: false,
};

export default Dialog;
