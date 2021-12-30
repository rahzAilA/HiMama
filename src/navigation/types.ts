import { NavigationProp } from "@react-navigation/native";

import { RootRoutes } from "./routes";

export type RootStackParamList = {
  [RootRoutes.Error]: undefined;
};

export type RootStackNavigationProp = NavigationProp<RootStackParamList>;
