import React from 'react';
import {Button, ScrollView, SafeAreaView, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {updateIncrementData} from '../../redux/number-increment/actions';
import useSelect from './selector';
import styles from './style';

const IncrementNumber = () => {
  const dispatch = useDispatch();
  const {incrementData} = useSelect();
  const clickMe = 'Click Me !';
  const onPressButton = () => {
    console.warn('enter the function');
    const added = Number(incrementData) + 1;
    console.warn('added', added);
    dispatch(updateIncrementData(added.toString()));
  };

  console.warn(incrementData);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.textData}>{incrementData}</Text>
        <View style={styles.buttonViewRound}>
          <Button onPress={onPressButton} title={clickMe} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default IncrementNumber;
