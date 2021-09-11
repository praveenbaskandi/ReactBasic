import {ScaledSheet} from 'react-native-size-matters';

import {Colors} from '../../utils/Colors';

export default ScaledSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  containerTop: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    margin: 5,
  },
  input1: {
    borderRadius: '4@ms',
    height: '30@ms',
    borderWidth: '1@ms',
    marginHorizontal: '50@ms',
    paddingVertical: 0,
    marginTop: '20@ms',
    paddingHorizontal: '5@ms',
    color: Colors.glBlack,
    borderColor: '#000000',
  },
  textStyle: {
    fontSize: '18@ms',
    alignSelf: 'center',
    marginTop: '50@ms',
    color: Colors.glBlack,
  },
});
