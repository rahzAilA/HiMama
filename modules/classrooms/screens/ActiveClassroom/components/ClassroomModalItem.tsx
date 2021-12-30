import { TouchableBox, Typography } from "~/components";
import { palette } from "~/theme/palette";

import { useChangeChildClassroom } from "../../../data";
import { Classroom } from "../../../types";

type ClassroomModalItemProps = {
  classroom: Classroom;
};

export function ClassroomModalItem({ classroom }: ClassroomModalItemProps) {
  const changeChildClassroom = useChangeChildClassroom(classroom);

  // why onPressOut instead of onPress
  // https://github.com/facebook/react-native/issues/18235
  return (
    <TouchableBox
      key={classroom.id}
      flexDirection="row"
      alignItems="center"
      paddingVertical={15}
      borderBottomWidth={1}
      borderBottomColor={palette.Snow}
      onPressOut={changeChildClassroom}
    >
      <Typography variant="globalBody">{classroom.name}</Typography>
    </TouchableBox>
  );
}
