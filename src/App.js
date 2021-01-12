import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CustomButton from './components/Custom-Button';
import { ThemeContext, themesSchema, LIGHT_VARIANT, DARK_VARIANT } from './theme/ThemeProvider';

function App() {

  const [ themeVariant,  setThemeVariant ] = useState(LIGHT_VARIANT);

  // To just initialize the function on component mount!
  const toggleTheme = useCallback(() => {
    setThemeVariant(variant => variant === LIGHT_VARIANT ? DARK_VARIANT : LIGHT_VARIANT);
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
              <CustomButton
                title="Hello1212"
                onClick={() => {
                  alert('hello');
                }}
                disabled={false}
                style={{ height: '25%', width: '50%' }}
              />
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
