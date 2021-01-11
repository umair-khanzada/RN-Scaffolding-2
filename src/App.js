import React, { useState, useContext, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

import  Center  from './components/Center';

import { ThemeContext, themesSchema, LIGHT_VARIANT, DARK_VARIANT } from './theme/ThemeProvider';


function App() {

  const [themeVariant, setThemeVariant] = useState(LIGHT_VARIANT);

  // To just initialize the function on component mount!
  const toggleTheme = useCallback(() => {
    setThemeVariant(variant => variant === LIGHT_VARIANT ? DARK_VARIANT : LIGHT_VARIANT);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={themesSchema[themeVariant]}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Center
          height={'100%'}
          width={'100%'}
          direction={'column'}
          variant={'light'}
          >
           <Text>Hello From Scaffolding App!</Text>
          </Center>
        </SafeAreaView>
      </ThemeContext.Provider>
    </>
  );
}


const styles = StyleSheet.create({

});

export default App;
