import React from 'react';
import {Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {func} from 'prop-types';
import {useNavigation} from '@react-navigation/native';

import styles from './style.js';

const DATA = [
  {text: 'Button', nav: 'ButtonPage'},
  {text: 'Input Text', nav: 'InputText'},
  {text: 'Icon Page', nav: 'IconPage'},
  {text: 'Horizontall Scroll', nav: 'HorizontalScrollPage'},
  {text: 'Local Storage', nav: 'LocalStorage'},
  {text: 'Loader Page', nav: 'LoaderPage'},
  {text: 'Dialog Page', nav: 'DialogPage'},
  {text: 'Flat List', nav: ''},
  {text: 'Toast Page', nav: 'ToastPage'},
  {text: 'Increment Number', nav: 'IncrementNumber'},
];

const Home = () => {
  const navigation = useNavigation();
  const clickItem = navName => {
    navigation.navigate(navName);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      id={item.text}
      style={styles.containerView}
      onPress={() => {
        clickItem(item.nav);
      }}>
      <Text style={styles.buttonText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

Home.propTypes = {
  navigation: func.isRequired,
};

export default Home;
