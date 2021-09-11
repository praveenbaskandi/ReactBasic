import {ScaledSheet} from 'react-native-size-matters';

import {Colors} from '../../utils/Colors';

export default ScaledSheet.create({
  containerTop: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  container: {
    backgroundColor: '#50000000',
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
  input2: {
    marginTop: '10@ms',
    borderRadius: 4,
    height: '30@ms',
    marginHorizontal: '50@ms',
    borderWidth: '1@ms',
    paddingVertical: 0,
    color: Colors.glBlack,
    paddingHorizontal: '5@ms',
    borderColor: '#000000',
  },
  input3: {
    marginTop: '10@ms',
    borderRadius: '4@ms',
    marginHorizontal: '50@ms',
    height: '30@ms',
    borderWidth: '1@ms',
    color: Colors.glBlack,
    paddingHorizontal: '5@ms',
    paddingVertical: 0,
    borderColor: '#000000',
  },
});
