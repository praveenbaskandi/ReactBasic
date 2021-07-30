import {ScaledSheet} from 'react-native-size-matters';

import {windowWidth} from '../../../utils/dimension';

export default ScaledSheet.create({
  dialogContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '15@ms',
    maxWidth: '355@ms',
    width: '100%',
    padding: '10@ms',
    backgroundColor: '#FFFFFF',
  },
  title: {
    alignItems: 'center',
    color: '#000000',
    textAlign: 'center',
    fontSize: '15@ms',
  },
  subTitle: {
    alignItems: 'center',
    color: '#000000',
    fontSize: '10@ms',
    textAlign: 'center',
  },
  image: {
    height: '100@ms',
    width: '100@ms',
  },
  icon: {
    marginRight: '10@ms',
    marginTop: '10@ms',
    alignSelf: 'flex-end',
  },
});
