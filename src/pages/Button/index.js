import React from 'react';
import {Button, ScrollView, SafeAreaView, View} from 'react-native';

import styles from './style.js';

const ButtonUI = () => {
  const clickMe = 'Click Me!';
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.buttonViewRound}>
          <Button title={clickMe} />
        </View>
        <View style={styles.buttonViewRound}>
          <Button style={styles.buttonViewRound} title={clickMe} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonUI;
