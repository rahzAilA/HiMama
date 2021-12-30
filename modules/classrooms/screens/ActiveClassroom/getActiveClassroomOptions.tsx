import { StackNavigationOptions } from "@react-navigation/stack";

import { createNavigationHeaderConfig } from "~/utils/navigation";

import { ActiveClassroomControl, ActiveClassroomHeader } from "./components";

export const getActiveClassroomOptions = (): StackNavigationOptions =>
  createNavigationHeaderConfig({
    headerTitle: () => <ActiveClassroomHeader />,
    headerControls: () => <ActiveClassroomControl />,
  });
