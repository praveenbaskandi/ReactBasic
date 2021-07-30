import React, {useState} from 'react';

import DialogImg from '../../UI/Dialogs/DialogImg';
import imgDialog from '../../assets/camera.png';

const DialogImgPage = () => {
  const [showDialog, updateShow] = useState(true);
  const hideDialog = () => {
    updateShow(false);
  };
  return (
    <DialogImg
      title="Heading"
      subtitle="Sub Heading"
      logo={imgDialog}
      isCrossEnable
      crossButtonClick={hideDialog}
      buttonText="Close"
      buttonClick={hideDialog}
      isVisible={showDialog}
    />
  );
};

export default DialogImgPage;
