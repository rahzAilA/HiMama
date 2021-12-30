import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { ClassroomRoutes } from "./routes";
import { ClassroomStackNavigationProp, ClassroomStackParamList } from "./types";

export const useClassroomRoute = <T extends ClassroomRoutes>() => {
  const route = useRoute<RouteProp<ClassroomStackParamList, T>>();
  return route;
};

export const useClassroomNavigation = () => {
  const navigation = useNavigation<ClassroomStackNavigationProp>();
  return navigation;
};
