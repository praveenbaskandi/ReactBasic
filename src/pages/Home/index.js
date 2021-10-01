import React from 'react';
import {FlatList} from 'react-native';
import {func} from 'prop-types';
import {useNavigation} from '@react-navigation/native';

import Header from '../../UI/Header';
import * as S from './style';

const DATA = [
  {text: 'Button', nav: 'ButtonPage'},
  {text: 'Input Text', nav: 'InputText'},
  {text: 'Icon Page', nav: 'IconPage'},
  {text: 'Horizontall Scroll', nav: 'HorizontalScrollPage'},
  {text: 'Local Storage', nav: 'LocalStorage'},
  {text: 'Loader Page', nav: 'LoaderPage'},
  {text: 'Dialog Page', nav: 'DialogPage'},
  {text: 'Bottom Nav Page', nav: 'BottomNav'},
  {text: 'Redux Form', nav: 'ReduxForm'},
  {text: 'Flat List', nav: 'FlatList'},
  {text: 'Toast Page', nav: 'ToastPage'},
  {text: 'Increment Number', nav: 'IncrementNumber'},
  {text: 'Api Rquest', nav: 'ApiRquestPage'},
  {text: 'Graph', nav: 'GraphPage'},
];

const Home = () => {
  const heading = 'Home';
  const navigation = useNavigation();
  const clickItem = navName => {
    navigation.navigate(navName);
  };

  const renderItem = ({item}) => (
    <S.ContainerCover
      id={item.text}
      onPress={() => {
        clickItem(item.nav);
      }}>
      <S.Text>{item.text}</S.Text>
    </S.ContainerCover>
  );

  return (
    <S.Container>
      <Header text={heading} click={navigation.goBack} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </S.Container>
  );
};

Home.propTypes = {
  navigation: func.isRequired,
};

export default Home;
