import React, { forwardRef, useMemo, useRef } from "react";
import { Modalize } from "react-native-modalize";

import { Typography, ViewBox } from "~/components";
import { useCombinedRefs } from "~/hooks/useCombinedRefs";
import { palette } from "~/theme/palette";

import { useChildSelectContext, useClassroomContext } from "../../../data";
import { ClassroomModalItem } from "./ClassroomModalItem";

export const ClassroomListModal = forwardRef((_, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);

  const { classrooms, selectedClassroom } = useClassroomContext();
  const { exitSelectMode } = useChildSelectContext();

  const availableClassrooms = useMemo(
    () => classrooms.filter((classroom) => classroom.id !== selectedClassroom?.id),
    [classrooms, selectedClassroom],
  );

  const renderHeader = () => (
    <ViewBox
      paddingVertical={15}
      marginHorizontal={15}
      borderBottomWidth={1}
      borderBottomColor={palette.Snow}
    >
      <Typography variant="globalLabel" color={palette.Iron}>
        Select classroom
      </Typography>
    </ViewBox>
  );

  const renderContent = () => (
    <ViewBox paddingHorizontal={15}>
      {availableClassrooms.map((classroom) => (
        <ClassroomModalItem key={classroom.id} classroom={classroom} />
      ))}
    </ViewBox>
  );

  return (
    <Modalize
      ref={combinedRef}
      contentRef={contentRef}
      HeaderComponent={renderHeader}
      snapPoint={350}
      onClosed={exitSelectMode}
    >
      {renderContent()}
    </Modalize>
  );
});
