import { Child } from "../types";
import { useClassroomContext } from "./ClassroomsProvider";

export const useActiveChildren = (): Child[] => {
  const { selectedClassroom } = useClassroomContext();
  return selectedClassroom?.children || [];
};
