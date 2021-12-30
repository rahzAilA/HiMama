import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { Classroom } from "../types";
import { useClassrooms } from "./useClassrooms";

type ClassroomContextType = {
  classrooms: Classroom[];
  selectedClassroom?: Classroom;
  selectedClassroomIdx: number;
  setClassroomIdx: (index: number) => void;
};

const ClassroomContext = createContext<ClassroomContextType>({
  setClassroomIdx: () => {},
  selectedClassroomIdx: 0,
  classrooms: [],
});

type ClassroomContextProviderProps = {
  children: ReactNode;
};

export function ClassroomContextProvider({ children }: ClassroomContextProviderProps) {
  const classrooms = useClassrooms();
  const [selectedClassroomIdx, setClassroomIdx] = useState(0);

  const contextValue = useMemo(
    () => ({
      selectedClassroom: classrooms[selectedClassroomIdx],
      selectedClassroomIdx,
      setClassroomIdx,
      classrooms,
    }),
    [selectedClassroomIdx, setClassroomIdx, classrooms],
  );

  return <ClassroomContext.Provider value={contextValue}>{children}</ClassroomContext.Provider>;
}

export const useClassroomContext = () => useContext(ClassroomContext);
