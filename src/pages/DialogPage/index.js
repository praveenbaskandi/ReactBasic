import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import BottomDialog from '../../UI/Dialogs/BottomDialog';
import ButtonUI from '../../UI/Button';
import Header from '../../UI/Header';
import DialogImg from './DialogImgPage';
import * as S from './style';

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
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <ButtonUI
        btnText={dialogCenter}
        mt={10}
        click={() => {
          updateShow(true);
        }}
      />
      <ButtonUI
        btnText={dialogBottom}
        mt={10}
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
    </S.Container>
  );
};

export default ButtonPage;
