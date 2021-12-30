import { useEffect, useState } from "react";
import { useNetInfo } from "@react-native-community/netinfo";

import { useRootNavigation } from "~/navigation/hooks";
import { RootRoutes } from "~/navigation/routes";

export function NetworkListener() {
  const { isInternetReachable } = useNetInfo();
  const navigation = useRootNavigation();

  const [offlineMode, setOfflineMode] = useState(false);
  useEffect(() => {
    if (!isInternetReachable && !offlineMode) {
      setOfflineMode(true);
      navigation.navigate(RootRoutes.NoNetwork);
    } else if (isInternetReachable && offlineMode) {
      setOfflineMode(false);
      navigation.navigate(RootRoutes.ClassroomNavigator);
    }
  }, [isInternetReachable, navigation, offlineMode, setOfflineMode]);

  return null;
}
