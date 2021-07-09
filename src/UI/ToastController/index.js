import {RNNotificationBanner} from 'react-native-notification-banner';

import {Colors} from '../../utils/Colors';

export const toastSuccess = (title, subTitle) => {
  return RNNotificationBanner.Show({
    title: title,
    subTitle: subTitle,
    withIcon: false,
    //   icon: copy,
    tintColor: Colors.success,
    titleColor: Colors.white,
    subTitleColor: Colors.white,
    isSwipeToDismissEnabled: true,
  });
};

export const toastError = (title, subTitle) => {
  return RNNotificationBanner.Show({
    title: title,
    subTitle: subTitle,
    withIcon: false,
    //   icon: copy,
    tintColor: Colors.error,
    titleColor: Colors.white,
    subTitleColor: Colors.white,
    isSwipeToDismissEnabled: true,
  });
};

export const toastWarning = (title, subTitle) => {
  return RNNotificationBanner.Show({
    title: title,
    subTitle: subTitle,
    withIcon: false,
    //   icon: copy,
    tintColor: Colors.warning,
    titleColor: Colors.white,
    subTitleColor: Colors.white,
    isSwipeToDismissEnabled: true,
  });
};

export const toastNormal = (title, subTitle) => {
  return RNNotificationBanner.Show({
    title: title,
    subTitle: subTitle,
    withIcon: false,
    //   icon: copy,
    tintColor: Colors.primary,
    titleColor: Colors.white,
    subTitleColor: Colors.white,
    isSwipeToDismissEnabled: true,
  });
};
