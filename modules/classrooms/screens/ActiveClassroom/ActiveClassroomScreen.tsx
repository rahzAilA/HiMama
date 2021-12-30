import { useEffect, useRef } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import { Background, ViewBox } from "~/components";
import { palette } from "~/theme/palette";

import { ChildListItem, EmptyList } from "../../components";
import { useActiveClassroom, useChildSelectContext } from "../../data";
import { Child } from "../../types";
import { ClassroomListModal } from "./components";

type RenderItemParams = {
  item: Child;
};

const renderItem = ({ item }: RenderItemParams) => <ChildListItem child={item} />;

/**
 * Fullname is not guaranteed to be unique but sadly we do not real IDs for
 * children. Ideally this should be discussed with backend folks to ensure we
 * receive unique ID but since its a test database, let's stick with fullname.
 */
const keyExtractor = (item: Child) => item.fullName;

export function ActiveClassroomScreen() {
  const selectedClassroom = useActiveClassroom();
  const { classroomsModalVisible } = useChildSelectContext();
  const modalRef = useRef();

  useEffect(() => {
    // @ts-ignore
    if (classroomsModalVisible) modalRef.current?.open();
    // @ts-ignore
    else modalRef.current?.close();
  }, [modalRef, classroomsModalVisible]);

  if (!selectedClassroom)
    return (
      <Background>
        <ViewBox flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator size={72} color={palette.Snow} />
        </ViewBox>
      </Background>
    );

  return (
    <Background>
      <ViewBox testID="ActiveClassroom" marginBottom={16} flex={1}>
        <ClassroomListModal ref={modalRef} />
        <FlatList
          data={selectedClassroom.children}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListEmptyComponent={EmptyList}
        />
      </ViewBox>
    </Background>
  );
}
