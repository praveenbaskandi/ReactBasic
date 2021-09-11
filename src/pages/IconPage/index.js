import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../UI/Header';
import Icon from '../../UI/Icons';
import styles from './style';

const IconPage = () => {
  const heading = 'Icon Page';
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerTop}>
      <Header text={heading} click={navigation.goBack} />
      <View style={styles.container}>
        <Icon name="star-empty" size={10} color="#000000" style={styles.icon} />
        <Icon name="th-list" size={10} color="#000000" style={styles.icon} />
        <Icon name="th" size={10} color="#000000" style={styles.icon} />
        <Icon name="ok-circled" size={10} color="#000000" style={styles.icon} />
        <Icon name="ok" size={10} color="#000000" style={styles.icon} />
        <Icon name="mail-alt" size={10} color="#000000" style={styles.icon} />
      </View>
      <View style={styles.container}>
        <Icon name="glass" size={20} color="#FF0000" style={styles.icon} />
        <Icon name="videocam" size={20} color="#FF0000" style={styles.icon} />
        <Icon
          name="thumbs-up-alt"
          size={20}
          color="#FF0000"
          style={styles.icon}
        />
        <Icon
          name="thumbs-down-alt"
          size={20}
          color="#FF0000"
          style={styles.icon}
        />
        <Icon name="mic" size={20} color="#FF0000" style={styles.icon} />
        <Icon
          name="soccer-ball"
          size={20}
          color="#FF0000"
          style={styles.icon}
        />
      </View>
      <View style={styles.container}>
        <Icon name="folder" size={20} color="#007500" style={styles.icon} />
        <Icon name="pencil" size={20} color="#007500" style={styles.icon} />
        <Icon name="bell-alt" size={20} color="#007500" style={styles.icon} />
        <Icon name="comment" size={20} color="#007500" style={styles.icon} />
      </View>
      <View style={styles.container}>
        <Icon name="basket" size={20} color="#278ED5" style={styles.icon} />
        <Icon name="calendar" size={20} color="#278ED5" style={styles.icon} />
        <Icon name="phone" size={20} color="#278ED5" style={styles.icon} />
        <Icon name="cog" size={20} color="#278ED5" style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};
export default IconPage;
