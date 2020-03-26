import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {defaultTheme} from '@theme/patch';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from '@navigations/root.navigator';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
