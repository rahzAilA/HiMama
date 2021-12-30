import { Dimensions } from "react-native";

export const height = (percent: number) => Dimensions.get("screen").height * (percent / 100);

export const width = (percent: number) => Dimensions.get("screen").width * (percent / 100);
