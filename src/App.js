import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { ThemeContext, themesSchema, lightVariant, darkVariant } from './theme/ThemeProvider';



function App() {

  const [ themeVariant,  setThemeVariant ] = useState(lightVariant);

  // To just initialize the function on component mount!
  const toggleTheme = useCallback(() => {
    setThemeVariant(variant => variant === lightVariant ? darkVariant : lightVariant);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={themesSchema[themeVariant]}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text>React Native Scaffolding!</Text>
            <TouchableOpacity onPress={toggleTheme}>
              <Text>Click Me To Change Theme!</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ThemeContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
