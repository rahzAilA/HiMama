import React, { ForwardedRef, forwardRef, memo, ReactNode } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";

type TouchableBoxAttrs = ViewStyle;

type ViewBoxProps = {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
  silent?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
} & TouchableBoxAttrs;

const BaseTouchableBox = forwardRef(
  (
    {
      children,
      silent,
      disabled,
      style,
      onPress,
      onPressOut,
      onLongPress,
      ...styles
    }: ViewBoxProps,
    ref: ForwardedRef<TouchableOpacity>,
  ) => (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      disabled={disabled}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      style={[style, styles]}
      activeOpacity={silent ? 1 : 0.4}
    >
      {children}
    </TouchableOpacity>
  ),
);

export const TouchableBox = memo(BaseTouchableBox);
