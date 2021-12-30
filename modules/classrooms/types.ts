export type Child = {
  fullName: string;
  checked_in: boolean;
};

export type Classroom = {
  id: string;
  name: string;
  children: Child[];
};
