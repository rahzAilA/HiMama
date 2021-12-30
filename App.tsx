import "react-native-gesture-handler";

import { SplashScreen } from "~/components";
import { NavigationContainer, RootStackNavigator } from "~/navigation";

export function App() {
  return (
    <NavigationContainer>
      <SplashScreen />
      <RootStackNavigator />
    </NavigationContainer>
  );
}
