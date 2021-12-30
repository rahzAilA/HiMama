import { useCallback } from "react";

import { TouchableBox, Typography, ViewBox } from "~/components";
import { useFlag } from "~/services/flags";
import { palette } from "~/theme/palette";

import { useChildSelectContext } from "../../../data";

function SelectModeControl() {
  const {
    allSelected,
    noneSelected,
    selectAllChildren,
    deselectAllChildren,
    toggleClassroomModal,
  } = useChildSelectContext();

  const openClassroomModal = useCallback(() => toggleClassroomModal(true), [toggleClassroomModal]);

  return (
    <ViewBox alignItems="center" flexDirection="row">
      <TouchableBox
        marginRight={16}
        flexDirection="row"
        alignItems="center"
        onPress={allSelected ? deselectAllChildren : selectAllChildren}
      >
        <Typography variant="globalC2" color={palette.Snow}>
          {allSelected ? "Deselect all" : "Select all"}
        </Typography>
      </TouchableBox>
      <TouchableBox
        disabled={noneSelected}
        onPress={openClassroomModal}
        flexDirection="row"
        alignItems="center"
      >
        <ViewBox opacity={noneSelected ? 0.3 : 1}>
          <Typography variant="globalCTA" color={palette.Snow}>
            Move
          </Typography>
        </ViewBox>
      </TouchableBox>
    </ViewBox>
  );
}

function EditButton() {
  const { switchOnSelectMode } = useChildSelectContext();
  return (
    <TouchableBox flexDirection="row" alignItems="center" onPress={switchOnSelectMode}>
      <Typography variant="globalC1" color={palette.Snow}>
        Edit
      </Typography>
    </TouchableBox>
  );
}

export function ActiveClassroomControl() {
  const { selectMode, classroomsModalVisible } = useChildSelectContext();
  const withMultipleClassrooms = useFlag("withMultipleClassrooms");

  const showSelectControl = withMultipleClassrooms && selectMode && !classroomsModalVisible;

  if (showSelectControl) return <SelectModeControl />;

  if (withMultipleClassrooms) return <EditButton />;

  return null;
}
