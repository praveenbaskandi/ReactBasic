import React from 'react';
import {TextInput, ScrollView, SafeAreaView} from 'react-native';

import styles from './style.js';

const InputText = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.input1}
          placeholder="Enter Name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input2}
          placeholder="Enter Number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input3}
          placeholder="Enter Email"
          keyboardType="default"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InputText;
