import {StyleSheet} from 'react-native';

import {Colors} from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    height: 40,
    borderColor: Colors.glDivider,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: Colors.glTextGen,
  },
  icon: {
    margin: 5,
    position: 'absolute',
    left: 15,
  },
});
