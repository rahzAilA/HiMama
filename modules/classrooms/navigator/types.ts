import { NavigationProp } from "@react-navigation/native";

import { ClassroomRoutes } from "./routes";

export type ClassroomStackParamList = {
  [ClassroomRoutes.ActiveClassroom]: undefined;
  [ClassroomRoutes.ClassroomSelect]: undefined;
};

export type ClassroomStackNavigationProp = NavigationProp<ClassroomStackParamList>;
