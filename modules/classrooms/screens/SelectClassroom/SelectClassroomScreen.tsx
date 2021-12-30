import { useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Background, TouchableBox, Typography, ViewBox } from "~/components";
import { palette } from "~/theme/palette";

import { ClassroomListItem } from "../../components/ClassroomListItem";
import { useClassroomContext } from "../../data";
import { Classroom } from "../../types";

type RenderItemProps = {
  index: number;
  item: Classroom;
};

const renderItem = ({ item, index }: RenderItemProps) => (
  <ClassroomListItem classroom={item} index={index} />
);

export function SelectClassroomScreen() {
  const { classrooms } = useClassroomContext();

  const navigation = useNavigation();
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <Background>
      <ViewBox flex={1}>
        <FlatList data={classrooms} renderItem={renderItem} />
        <TouchableBox padding={36} alignItems="center" onPress={handleGoBack}>
          <Typography variant="globalC1" color={palette.Snow}>
            Cancel
          </Typography>
        </TouchableBox>
      </ViewBox>
    </Background>
  );
}
