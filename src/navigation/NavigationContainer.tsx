import { ReactNode } from "react";
import {
  NavigationContainer as BaseNavigationContainer,
} from "@react-navigation/native";

import { palette } from "~/theme/palette";

type NavigationContainerProps = {
  children: ReactNode;
};

export function NavigationContainer({ children }: NavigationContainerProps) {
  return (
    <BaseNavigationContainer
    >
      {children}
    </BaseNavigationContainer>
  );
}
