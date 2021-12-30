import { useCallback, useMemo } from "react";
import database from "@react-native-firebase/database";

import { showErrorMesg } from "~/services/error";
import { logError } from "~/services/logger";
import { values } from "~/utils/lodash";

import { Classroom } from "../types";
import { useChildSelectContext } from "./ChildSelectProvider";
import { useClassroomContext } from "./ClassroomsProvider";

export const useChangeChildClassroom = (newClassroom: Classroom) => {
  const {
    classrooms,
    selectedClassroom: currentClassroom,
    selectedClassroomIdx: currentClassroomIdx,
  } = useClassroomContext();

  const { selectedChildren, exitSelectMode } = useChildSelectContext();

  const selectedChildrenList = values(selectedChildren);

  const updatedCurrentClassroomChildren = useMemo(
    () => currentClassroom?.children?.filter((child) => !selectedChildren[child.fullName]),
    [currentClassroom, selectedChildren],
  );

  const newClassroomIdx = useMemo(
    () => classrooms.findIndex((classroom) => classroom.id === newClassroom.id),
    [classrooms, newClassroom],
  );

  const updatedNewClassroomChildren = useMemo(
    () => [...(newClassroom?.children || []), ...selectedChildrenList],
    [newClassroom, selectedChildrenList],
  );

  const changeChildClassroom = useCallback(() => {
    if (selectedChildrenList.length <= 0) return;
    // @todo: Figure out how to batch these database calls
    database()
      .ref(`data/center/classrooms/${currentClassroomIdx}/children`)
      .set(updatedCurrentClassroomChildren)
      .catch((e) => {
        logError(e);
        showErrorMesg("Something went wrong..");
      });
    database()
      .ref(`data/center/classrooms/${newClassroomIdx}/children`)
      .set(updatedNewClassroomChildren)
      .catch((e) => {
        logError(e);
        showErrorMesg("Something went wrong..");
      });
    exitSelectMode();
  }, [
    exitSelectMode,
    newClassroomIdx,
    currentClassroomIdx,
    selectedChildrenList,
    updatedCurrentClassroomChildren,
    updatedNewClassroomChildren,
  ]);

  return changeChildClassroom;
};
