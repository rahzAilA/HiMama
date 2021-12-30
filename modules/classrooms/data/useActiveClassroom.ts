import { Classroom } from "../types";
import { useClassroomContext } from "./ClassroomsProvider";

export const useActiveClassroom = (): Classroom | null => {
  const { selectedClassroom } = useClassroomContext();
  return selectedClassroom || null;
};
