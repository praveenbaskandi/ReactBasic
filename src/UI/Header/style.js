import {StyleSheet} from 'react-native';

import {Colors} from '../../utils/Colors';
import {statusbarHeight} from '../../utils/dimension';

export default StyleSheet.create({
  container: {
    height: 50,
    borderColor: Colors.glDivider,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    alignItems: 'center',
    marginTop: statusbarHeight,
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
