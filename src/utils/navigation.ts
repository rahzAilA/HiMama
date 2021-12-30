import { ReactElement } from "react";
import { ViewStyle } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

import { palette } from "~/theme/palette";

export const createNavigationHeaderConfig = ({
  headerTitle,
  headerControls,
  headerStyle,
}: {
  headerTitle: () => ReactElement;
  headerControls?: () => ReactElement;
  headerStyle?: ViewStyle;
}): StackNavigationOptions => ({
  headerTitle,
  headerRight: headerControls,
  headerTitleAlign: "left" as const,
  headerRightContainerStyle: {
    marginRight: 24,
  },
  headerLeft: () => null,
  headerShown: true,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0,
    backgroundColor: palette.Purple500,
    ...headerStyle,
  },
});
