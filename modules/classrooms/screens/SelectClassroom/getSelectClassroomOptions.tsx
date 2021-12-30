import { StackNavigationOptions } from "@react-navigation/stack";

import { createNavigationHeaderConfig } from "~/utils/navigation";

import { SelectClassroomHeader } from "./components";

export const getSelectClassroomOptions = (): StackNavigationOptions =>
  createNavigationHeaderConfig({
    headerTitle: () => <SelectClassroomHeader />,
  });
