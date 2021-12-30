import { createStackNavigator } from "@react-navigation/stack";

import { ChildSelectContextProvider, ClassroomContextProvider } from "../data";
import { getSelectClassroomOptions, SelectClassroomScreen } from "../screens/SelectClassroom";
import { ClassroomRoutes } from "./routes";
import { ClassroomStackParamList } from "./types";

const ClassroomStack = createStackNavigator<ClassroomStackParamList>();

export function ClassroomStackNavigator() {
  return (
    <ClassroomContextProvider>
        <ClassroomStack.Navigator initialRouteName={ClassroomRoutes.ActiveClassroom}>
          <ClassroomStack.Screen
            name={ClassroomRoutes.ClassroomSelect}
            component={SelectClassroomScreen}
            options={getSelectClassroomOptions()}
          />
        </ClassroomStack.Navigator>
    </ClassroomContextProvider>
  );
}
