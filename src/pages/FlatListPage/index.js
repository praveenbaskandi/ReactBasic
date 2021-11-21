import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../UI/Header';
import * as S from './style';

const DATA = [
  {text: '1', word: 'One'},
  {text: '2', word: 'Two'},
  {text: '3', word: 'Three'},
  {text: '4', word: 'Four'},
  {text: '5', word: 'Five'},
  {text: '6', word: 'Six'},
  {text: '7', word: 'Seven'},
  {text: '8', word: 'Eight'},
  {text: '9', word: 'Nine'},
  {text: '10', word: 'Ten'},
  {text: '11', word: 'Eleven'},
  {text: '12', word: 'Twelve'},
];

const ButtonPage = () => {
  const heading = 'FlatList Page';
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <S.ItemContainer id={item.text}>
      <S.Text>{item.text}</S.Text>
      <S.Text>{item.word}</S.Text>
    </S.ItemContainer>
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

export default ButtonPage;
