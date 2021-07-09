import React from 'react';
import {TextInput, ScrollView, SafeAreaView} from 'react-native';

import {Colors} from '../../utils/Colors';
import Header from '../../UI/Header';
import styles from './style';

const InputText = ({navigation}) => {
  const heading = 'Input Text Page';
  return (
    <SafeAreaView>
      <Header text={heading} click={navigation.goBack} />
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.input1}
          placeholder="Enter Name"
          keyboardType="default"
          placeholderTextColor={Colors.glGrey}
        />
        <TextInput
          style={styles.input2}
          placeholder="Enter Number"
          keyboardType="numeric"
          placeholderTextColor={Colors.glGrey}
        />
        <TextInput
          style={styles.input3}
          placeholder="Enter Email"
          keyboardType="default"
          placeholderTextColor={Colors.glGrey}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InputText;
