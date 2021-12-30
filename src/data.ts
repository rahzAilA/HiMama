import { Classroom } from "@modules/classrooms/types";

export type Center = {
  id: string;
  name: string;
  classrooms: Classroom[];
  allClassroomsAccessible: boolean;
};
