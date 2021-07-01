import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components'

import { SignIn } from './src/screens/SignIn';

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from './src/global/theme'

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme} >
      <SignIn />
    </ThemeProvider>
  );
}
