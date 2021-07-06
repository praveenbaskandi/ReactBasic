import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import configureStore from './src/redux/store';
import Navigator from '../ReactBasic/src/navigation';

const App = () => {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
