import BaseSplashScreen from "react-native-splash-screen";

import useTimeoutFn from "~/hooks/useTimeoutFn";

export function SplashScreen() {
  // Hide after 7 seconds if not already hidden
  useTimeoutFn(() => {
    BaseSplashScreen.hide();
  }, 7000);

  return null;
}
