import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { RootRoutes } from "./routes";
import { RootStackNavigationProp, RootStackParamList } from "./types";

export const useRootRoute = <T extends RootRoutes>() => {
  const route = useRoute<RouteProp<RootStackParamList, T>>();
  return route;
};

export const useRootNavigation = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return navigation;
};
