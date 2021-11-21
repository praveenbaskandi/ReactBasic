import React from 'react';
import {SafeAreaView, Button, View, TextField} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {compose} from 'redux';

import ButtonUI from '../../UI/Button';
import Header from '../../UI/Header';
import styles from './style';

const ReduxFinalForm = () => {
  const heading = 'Redux Form';
  const navigation = useNavigation();
  const clickMe = 'Click Me!';
  const onSubmit = values => {
    window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header text={heading} click={navigation.goBack} />
      <ButtonUI btnText={clickMe} style={1} />
      <ButtonUI btnText={clickMe} style={2} />

      {/* <Field name="firstName" component={TextField} placeholder="First Name" /> */}
    </SafeAreaView>
  );
};

// export default compose(
//   reduxForm({
//     form: 'ReduxFinalForm',
//   }),
// )(ReduxFinalForm);

export default ReduxFinalForm;
