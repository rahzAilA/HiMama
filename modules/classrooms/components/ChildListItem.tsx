import { ReactNode, useCallback } from "react";

import { Icon, TouchableBox, Typography, ViewBox } from "~/components";
import { palette } from "~/theme/palette";

import { useChildSelectContext } from "../data";
import { useToggleCheckIn } from "../data/useToggleCheckIn";
import { Child } from "../types";

type ChildCardProps = {
  child: Child;
};

export function ChildListItem({ child }: ChildCardProps) {
  const { selectMode, selectedChildren, toggleChildSelect } = useChildSelectContext();

  const toggleCheckIn = useToggleCheckIn(child);
  const handleSelect = useCallback(() => toggleChildSelect(child), [toggleChildSelect, child]);

  const isSelected = Boolean(selectedChildren[child.fullName]);

  const onPress = selectMode ? handleSelect : toggleCheckIn;

  let rightColumn: ReactNode = null;

  if (selectMode) {
    const iconName = isSelected ? "check-circle" : "radio-button-unchecked";
    rightColumn = (
      <ViewBox padding={2}>
        <Icon name={iconName} color={palette.Snow} />
      </ViewBox>
    );
  } else {
    rightColumn = (
      <ViewBox
        padding={5}
        width={100}
        borderRadius={5}
        alignItems="center"
        backgroundColor={child.checked_in ? palette.Green : palette.Red}
      >
        <Typography variant="globalC2" color={palette.Snow}>
          {child.checked_in ? "Checked in" : "Checked out"}
        </Typography>
      </ViewBox>
    );
  }

  return (
    <TouchableBox
      flexDirection="row"
      alignItems="center"
      elevation={2}
      borderRadius={8}
      marginVertical={4}
      paddingVertical={16}
      marginHorizontal={16}
      paddingHorizontal={16}
      silent={isSelected}
      onPress={onPress}
      onLongPress={handleSelect}
      backgroundColor={isSelected ? palette.Purple300 : palette.Purple700}
    >
      <ViewBox flex={1} alignItems="center" flexDirection="row" marginRight={16}>
        <Typography variant="globalBody" color={palette.Snow}>
          {child.fullName}
        </Typography>
      </ViewBox>
      {rightColumn}
    </TouchableBox>
  );
}
