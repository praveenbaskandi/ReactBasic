import {StyleSheet} from 'react-native';

import {Colors, Fonts, statusbarHeight} from '../../utils/Colors';

export default StyleSheet.create({
  pageContainer: {
    paddingTop: 10,
  },
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: statusbarHeight,
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bottomContainer: {
    paddingBottom: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotActive: {
    height: 6,
    width: 6,
    marginHorizontal: 6,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  dotNonActive: {
    height: 6,
    width: 6,
    marginHorizontal: 6,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    opacity: 0.2,
  },
  pageHeading: {
    color: '#252935',
    fontSize: 16,
    marginTop: 50,
    fontFamily: Fonts.muliBlack,
    lineHeight: 22,
    alignSelf: 'center',
  },
  pageImage: {
    height: 150,
    alignSelf: 'center',
  },
  pageSubHeading: {
    color: '#9999ad',
    fontSize: 14,
    marginTop: 30,
    marginHorizontal: 20,
    textAlign: 'center',
    fontFamily: Fonts.muliRegular,
    lineHeight: 22,
    alignSelf: 'center',
  },
});
