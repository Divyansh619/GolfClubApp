import { View, Text } from 'react-native';
import AppNavigator from './Navigaton/AppNavigator';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_700Bold_Italic } from '@expo-google-fonts/roboto';
import AuthContextProvider from './Components/Conetxt/AuthContextProvider ';
const App = () => {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': Roboto_400Regular,
    'Roboto-Bold': Roboto_700Bold,
    'Roboto-BoldItalic': Roboto_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <AuthContextProvider>
    <View style={{ flex: 1 }} >
      <AppNavigator />
    </View>
    </AuthContextProvider>
  );
}

export default App

