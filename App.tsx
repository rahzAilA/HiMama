import "react-native-gesture-handler";

import { SplashScreen } from "~/components";
import { NavigationContainer, RootStackNavigator } from "~/navigation";
import { DatabaseContextProvider } from "~/services/database";
import { FlagsProvider } from "~/services/flags";
import { NetworkListener } from "~/services/network";

export function App() {
  return (
    <NavigationContainer>
      <DatabaseContextProvider>
        <FlagsProvider>
          <SplashScreen />
          <RootStackNavigator />
          <NetworkListener />
        </FlagsProvider>
      </DatabaseContextProvider>
    </NavigationContainer>
  );
}
