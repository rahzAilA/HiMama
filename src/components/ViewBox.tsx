import React, { ForwardedRef, forwardRef, memo, ReactNode } from "react";
import { View, ViewStyle } from "react-native";

type ViewBoxAttrs = ViewStyle;

type ViewBoxProps = {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
} & ViewBoxAttrs;

const ViewBoxRaw = forwardRef(
  ({ children, style, ...styles }: ViewBoxProps, ref: ForwardedRef<View>) => (
    <View ref={ref} style={[style, styles]}>
      {children}
    </View>
  ),
);

export const ViewBox = memo(ViewBoxRaw);
