import "react-native-gesture-handler";

import { NavigationContainer, RootStackNavigator } from "~/navigation";

export function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
