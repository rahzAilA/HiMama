import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableBox, Typography, ViewBox } from "~/components";
import { palette } from "~/theme/palette";

import { useClassroomContext } from "../data";
import { Classroom } from "../types";

type ClassroomListItemProps = {
  index: number;
  classroom: Classroom;
};

export function ClassroomListItem({ classroom, index }: ClassroomListItemProps) {
  const { setClassroomIdx } = useClassroomContext();
  const navigation = useNavigation();

  const handleSelect = useCallback(() => {
    setClassroomIdx(index);
    navigation.goBack();
  }, [index, setClassroomIdx, navigation]);

  return (
    <TouchableBox
      flexDirection="row"
      elevation={2}
      borderRadius={8}
      marginVertical={4}
      paddingVertical={16}
      marginHorizontal={16}
      paddingHorizontal={16}
      onPress={handleSelect}
      onLongPress={handleSelect}
      backgroundColor={palette.Purple700}
    >
      <ViewBox flex={1} marginRight={16} justifyContent="center">
        <Typography variant="globalBody" color={palette.Snow}>
          {classroom.name}
        </Typography>
      </ViewBox>
    </TouchableBox>
  );
}
