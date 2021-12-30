import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

import { keyBy, size } from "~/utils/lodash";

import { Child } from "../types";
import { useActiveChildren } from ".";

type ChildSelectContextType = {
  selectMode: boolean;
  allSelected: boolean;
  noneSelected: boolean;
  selectedChildren: Record<string, Child>;
  classroomsModalVisible: boolean;
  exitSelectMode: () => void;
  toggleChildSelect: (child: Child) => void;
  selectAllChildren: () => void;
  switchOnSelectMode: () => void;
  deselectAllChildren: () => void;
  toggleClassroomModal: (toggle: boolean) => void;
};

const ChildSelectContext = createContext<ChildSelectContextType>({
  selectMode: false,
  allSelected: false,
  noneSelected: false,
  selectedChildren: {},
  exitSelectMode: () => {},
  toggleChildSelect: () => {},
  selectAllChildren: () => {},
  deselectAllChildren: () => {},
  switchOnSelectMode: () => {},
  classroomsModalVisible: false,
  toggleClassroomModal: () => {},
});

type ChildSelectProviderProps = {
  children: ReactNode;
};

export function ChildSelectContextProvider({ children }: ChildSelectProviderProps) {
  const allChildren = useActiveChildren();
  const [selectedChildren, setSelectedChildren] = useState<Record<string, Child>>({});
  const [selectMode, setSelectMode] = useState(false);
  const [classroomsModalVisible, toggleClassroomModal] = useState(false);

  const toggleChildSelect = useCallback(
    (child: Child) =>
      setSelectedChildren((selected) => {
        if (selectedChildren[child.fullName]) {
          const updatedSelected = { ...selected };
          delete updatedSelected[child.fullName];
          return updatedSelected;
        }
        if (!selectMode) setSelectMode(true);
        return { ...selected, [child.fullName]: child };
      }),
    [selectedChildren, setSelectedChildren, selectMode, setSelectMode],
  );

  const selectAllChildren = useCallback(
    () => setSelectedChildren(keyBy(allChildren, "fullName")),
    [setSelectedChildren, allChildren],
  );

  const deselectAllChildren = useCallback(() => setSelectedChildren({}), [setSelectedChildren]);

  const exitSelectMode = useCallback(() => {
    deselectAllChildren();
    setSelectMode(false);
    toggleClassroomModal(false);
  }, [deselectAllChildren, setSelectMode]);

  const switchOnSelectMode = useCallback(() => setSelectMode(true), [setSelectMode]);

  const allSelected = useMemo(
    () => size(selectedChildren) === allChildren.length,
    [selectedChildren, allChildren],
  );

  const noneSelected = useMemo(() => size(selectedChildren) === 0, [selectedChildren]);

  const contextValue = useMemo(
    () => ({
      selectMode,
      allSelected,
      noneSelected,
      exitSelectMode,
      selectedChildren,
      toggleChildSelect,
      selectAllChildren,
      switchOnSelectMode,
      deselectAllChildren,
      toggleClassroomModal,
      classroomsModalVisible,
    }),
    [
      selectMode,
      allSelected,
      noneSelected,
      exitSelectMode,
      selectedChildren,
      toggleChildSelect,
      selectAllChildren,
      switchOnSelectMode,
      deselectAllChildren,
      toggleClassroomModal,
      classroomsModalVisible,
    ],
  );

  return <ChildSelectContext.Provider value={contextValue}>{children}</ChildSelectContext.Provider>;
}

export const useChildSelectContext = () => useContext(ChildSelectContext);
