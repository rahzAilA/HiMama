import { createStackNavigator } from "@react-navigation/stack";

import { ChildSelectContextProvider, ClassroomContextProvider } from "../data";
import { ActiveClassroomScreen, getActiveClassroomOptions } from "../screens/ActiveClassroom";
import { getSelectClassroomOptions, SelectClassroomScreen } from "../screens/SelectClassroom";
import { ClassroomRoutes } from "./routes";
import { ClassroomStackParamList } from "./types";

const ClassroomStack = createStackNavigator<ClassroomStackParamList>();

export function ClassroomStackNavigator() {
  return (
    <ClassroomContextProvider>
      <ChildSelectContextProvider>
        <ClassroomStack.Navigator initialRouteName={ClassroomRoutes.ActiveClassroom}>
          <ClassroomStack.Screen
            name={ClassroomRoutes.ActiveClassroom}
            component={ActiveClassroomScreen}
            options={getActiveClassroomOptions()}
          />
          <ClassroomStack.Screen
            name={ClassroomRoutes.ClassroomSelect}
            component={SelectClassroomScreen}
            options={getSelectClassroomOptions()}
          />
        </ClassroomStack.Navigator>
      </ChildSelectContextProvider>
    </ClassroomContextProvider>
  );
}
