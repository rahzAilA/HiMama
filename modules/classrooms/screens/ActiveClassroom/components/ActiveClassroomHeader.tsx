import { useCallback } from "react";

import { Icon, TouchableBox, Typography } from "~/components";
import { useFlag } from "~/services/flags";
import { palette } from "~/theme/palette";

import { useChildSelectContext, useClassroomContext } from "../../../data";
import { useClassroomNavigation } from "../../../navigator/hooks";
import { ClassroomRoutes } from "../../../navigator/routes";

function NavigationHeader() {
  const { selectedClassroom } = useClassroomContext();
  const withMultipleClassrooms = useFlag("withMultipleClassrooms");

  const navigation = useClassroomNavigation();
  const handleOnPress = useCallback(() => {
    navigation.navigate(ClassroomRoutes.ClassroomSelect);
  }, [navigation]);

  return (
    <TouchableBox
      flexDirection="row"
      alignItems="center"
      onPress={handleOnPress}
      disabled={!withMultipleClassrooms}
    >
      <Typography variant="globalH5" color={palette.Snow}>
        {selectedClassroom?.name || ""}
      </Typography>
      {withMultipleClassrooms ? <Icon name="expand-more" color={palette.Snow} /> : null}
    </TouchableBox>
  );
}

function SelectModeHeader() {
  const { exitSelectMode } = useChildSelectContext();
  return (
    <TouchableBox onPress={exitSelectMode} flexDirection="row" alignItems="center">
      <Typography variant="globalBody" color={palette.Snow}>
        Cancel
      </Typography>
    </TouchableBox>
  );
}

export function ActiveClassroomHeader() {
  const { selectMode } = useChildSelectContext();

  return selectMode ? <SelectModeHeader /> : <NavigationHeader />;
}
