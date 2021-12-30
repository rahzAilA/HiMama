import { ReactNode } from "react";
import {
  DefaultTheme,
  NavigationContainer as BaseNavigationContainer,
} from "@react-navigation/native";

import { palette } from "~/theme/palette";

type NavigationContainerProps = {
  children: ReactNode;
};

export function NavigationContainer({ children }: NavigationContainerProps) {
  return (
    <BaseNavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: palette.Purple500,
        },
      }}
    >
      {children}
    </BaseNavigationContainer>
  );
}
