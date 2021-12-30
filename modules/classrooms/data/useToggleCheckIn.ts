import { useCallback, useMemo } from "react";
import database from "@react-native-firebase/database";

import { showErrorMesg } from "~/services/error";
import { logError } from "~/services/logger";

import { Child } from "../types";
import { useClassroomContext } from "./ClassroomsProvider";

export const useToggleCheckIn = (child: Child) => {
  const { selectedClassroom, selectedClassroomIdx } = useClassroomContext();

  const childIdx = useMemo(
    () =>
      selectedClassroom?.children.findIndex((classChild) => classChild.fullName === child.fullName),
    [selectedClassroom, child],
  );

  const toggleCheckIn = useCallback(() => {
    if (childIdx === undefined || selectedClassroomIdx === undefined) return;

    database()
      .ref(`data/center/classrooms/${selectedClassroomIdx}/children/${childIdx}/checked_in`)
      .transaction((checkedIn) => !checkedIn as any)
      .catch((e) => {
        showErrorMesg("Something went wrong..");
        logError(e);
      });
  }, [childIdx, selectedClassroomIdx]);

  return toggleCheckIn;
};
