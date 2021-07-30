import {StyleSheet} from 'react-native';

import {Colors} from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  buttonOrange: {
    backgroundColor: Colors.glOrange,
    height: 40,
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonGrey: {
    backgroundColor: Colors.glGrey,
    height: 40,
    width: '100%',
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
