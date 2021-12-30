import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import database from "@react-native-firebase/database";
import SplashScreen from "react-native-splash-screen";

import { Center } from "~/data";
import { useRootNavigation } from "~/navigation/hooks";
import { RootRoutes } from "~/navigation/routes";

import { logError } from "./logger";

type DatabaseState = {
  center?: Center;
};

const getInitialDbState = (): DatabaseState => ({ center: undefined });

const DatabaseContext = createContext(getInitialDbState());

type DatabaseContextProviderProps = {
  children: ReactNode;
};

export function DatabaseContextProvider({ children }: DatabaseContextProviderProps) {
  const [databaseState, setDatabaseState] = useState(getInitialDbState());
  const navigation = useRootNavigation();

  useEffect(() => {
    const onChangeListener = database()
      .ref("data")
      .on(
        "value",
        (snapshot) => {
          setDatabaseState(snapshot.val());
          // console.warn("done");
          SplashScreen.hide();
        },
        (error) => {
          logError(error);
          navigation.navigate(RootRoutes.Error);
          SplashScreen.hide();
        },
      );

    return () => database().ref("data").off("value", onChangeListener);
  }, [navigation]);

  return <DatabaseContext.Provider value={databaseState}>{children}</DatabaseContext.Provider>;
}

export const useDatabaseState = () => useContext(DatabaseContext);
