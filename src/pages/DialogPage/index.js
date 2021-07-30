import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BottomDialog from '../../UI/Dialogs/BottomDialog';
import ButtonUI from '../../UI/Button';
import Header from '../../UI/Header';
import DialogImg from './DialogImgPage';
import styles from './style';

const ButtonPage = () => {
  const heading = 'Dialog Page';
  const [showDialog, updateShow] = useState(false);
  const [showBottomDialog, updateShowBottomDialog] = useState(false);
  const navigation = useNavigation();
  const dialogCenter = 'Dialog Center';
  const dialogBottom = 'Dialog Bottom';

  const hideDialog = () => {
    updateShowBottomDialog(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header text={heading} click={navigation.goBack} />
      <ButtonUI
        btnText={dialogCenter}
        style={1}
        click={() => {
          updateShow(true);
        }}
      />
      <ButtonUI
        btnText={dialogBottom}
        style={2}
        click={() => {
          updateShowBottomDialog(true);
        }}
      />
      {showDialog ? <DialogImg /> : null}
      <BottomDialog
        isVisible={showBottomDialog}
        onBackdropPress={hideDialog}
        title="Heading"
        subTitle="Sub Heading"
        btnText="Close Dialog"
        buttonClick={hideDialog}
      />
    </SafeAreaView>
  );
};

export default ButtonPage;
