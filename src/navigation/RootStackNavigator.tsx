import { createStackNavigator } from "@react-navigation/stack";

import { ErrorScreen, NoNetworkScreen } from "~/screens";

import { ClassroomStackNavigator, getClassroomNavigatorOptions } from "@modules/classrooms/screens";

import { RootRoutes } from "./routes";
import { RootStackParamList } from "./types";

const RootStack = createStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName={RootRoutes.ClassroomNavigator}>
      <RootStack.Screen
        name={RootRoutes.ClassroomNavigator}
        component={ClassroomStackNavigator}
        options={getClassroomNavigatorOptions}
      />
      <RootStack.Screen
        name={RootRoutes.NoNetwork}
        component={NoNetworkScreen}
        options={getClassroomNavigatorOptions}
      />
      <RootStack.Screen
        name={RootRoutes.Error}
        component={ErrorScreen}
        options={getClassroomNavigatorOptions}
      />
    </RootStack.Navigator>
  );
}
