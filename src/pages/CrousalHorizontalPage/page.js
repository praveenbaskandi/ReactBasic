import React from 'react';
import {SafeAreaView, Image, Text, StatusBar, Dimensions} from 'react-native';
import {shape, string} from 'prop-types';

import styles from './style';

const PagePage = ({data}) => {
  const {width} = Dimensions.get('window');
  return (
    <SafeAreaView style={{width: width}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Text style={styles.pageHeading}>{data.heading}</Text>
      <Image style={styles.pageImage} source={data.image} />
      <Text style={styles.pageSubHeading}>{data.subHeading}</Text>
    </SafeAreaView>
  );
};

PagePage.propTypes = {
  data: shape({
    heading: string.isRequired,
    subHeading: string.isRequired,
    image: string.isRequired,
  }),
};

export default PagePage;
