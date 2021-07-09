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
    const added = Number(incrementData) + 1;
    dispatch(updateIncrementData(added.toString()));
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.textData}>{incrementData}</Text>
        <View style={styles.buttonViewRound}>
          <Button color="#f194ff" onPress={onPressButton} title={clickMe} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default IncrementNumber;
