import {StyleSheet} from 'react-native';

import {Colors} from '../../utils/Colors';

export default StyleSheet.create({
  buttonOrange: {
    backgroundColor: Colors.glOrange,
    marginHorizontal: 20,
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonGrey: {
    backgroundColor: Colors.glGrey,
    marginHorizontal: 20,
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 18,
  },
});
