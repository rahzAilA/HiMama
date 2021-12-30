import { useDatabaseState } from "~/services/database";

import { Classroom } from "../types";

export const useClassrooms = (): Classroom[] => {
  const dbState = useDatabaseState();

  return dbState.center?.classrooms || [];
};
