import { ReactNode, useMemo } from "react";
import { Text, TextStyle } from "react-native";

import { typography, TypographyVariant } from "~/theme/typography";

type TextAttrs = TextStyle;

type TypographyProps = {
  variant: TypographyVariant;
  style?: TextStyle | TextStyle[];
  children: string | number | ReactNode | (string | ReactNode)[];
} & TextAttrs;

export function Typography({ variant, children, style, ...styles }: TypographyProps) {
  const mergedStyles = useMemo(
    () => ({ ...typography[variant], ...style, ...styles }),
    [style, styles, variant],
  );

  return <Text style={mergedStyles}>{children}</Text>;
}
