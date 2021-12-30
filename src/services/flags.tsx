import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { useDatabaseState } from "./database";

type FlagsState = {
  withMultipleClassrooms: boolean;
};

const getFlagsState = (): FlagsState => ({ withMultipleClassrooms: false });

const FlagsContext = createContext(getFlagsState());

type FlagsProviderProps = {
  children: ReactNode;
};

export function FlagsProvider({ children }: FlagsProviderProps) {
  const [flags, setFlags] = useState(getFlagsState());
  const dbState = useDatabaseState();

  useEffect(() => {
    setFlags({
      withMultipleClassrooms: Boolean(dbState?.center?.allClassroomsAccessible),
    });
  }, [setFlags, dbState]);

  return <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>;
}

export const useFlag = (flag: keyof FlagsState) => useContext(FlagsContext)[flag];
