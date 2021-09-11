import React from 'react';
import {Button, ScrollView, SafeAreaView, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {updateIncrementData} from '../../redux/number-increment/actions';
import Header from '../../UI/Header';
import useSelect from './selector';
import styles from './style';

const IncrementNumber = ({navigation}) => {
  const dispatch = useDispatch();
  const {incrementData} = useSelect();
  const clickMe = 'Click Me !';
  const heading = 'Increment Number';
  const onPressButton = () => {
    const added = Number(incrementData) + 1;
    dispatch(updateIncrementData(added.toString()));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header text={heading} click={navigation.goBack} />
      <Text style={styles.textData}>{incrementData}</Text>
      <View style={styles.buttonViewRound}>
        <Button color="#f194ff" onPress={onPressButton} title={clickMe} />
      </View>
    </SafeAreaView>
  );
};
export default IncrementNumber;
