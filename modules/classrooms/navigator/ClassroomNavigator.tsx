import { createStackNavigator } from "@react-navigation/stack";

import { ClassroomRoutes } from "./routes";
import { ClassroomStackParamList } from "./types";

const ClassroomStack = createStackNavigator<ClassroomStackParamList>();

export function ClassroomStackNavigator() {
  return (
        <ClassroomStack.Navigator initialRouteName={ClassroomRoutes.ActiveClassroom}>
        </ClassroomStack.Navigator>
  );
}
