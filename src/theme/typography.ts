import { palette } from "./palette";

const fontDefaults = {
  fontFamily: "SuisseIntlSemiBold",
  fontWeight: "600" as const,
  color: palette.Black,
};

export const typography = {
  largeH1: {
    ...fontDefaults,
    fontSize: 56,
    lineHeight: 64,
  },
  largeH2: {
    ...fontDefaults,
    fontSize: 48,
    lineHeight: 56,
  },
  largeH3: {
    ...fontDefaults,
    fontSize: 40,
    lineHeight: 48,
  },
  largeH4: {
    ...fontDefaults,
    fontSize: 32,
    lineHeight: 40,
  },
  smallH1: {
    ...fontDefaults,
    fontSize: 40,
    lineHeight: 48,
  },
  smallH2: {
    ...fontDefaults,
    fontSize: 36,
    lineHeight: 44,
  },
  smallH3: {
    ...fontDefaults,
    fontSize: 32,
    lineHeight: 40,
  },
  smallH4: {
    ...fontDefaults,
    fontSize: 28,
    lineHeight: 36,
  },
  globalH5: {
    ...fontDefaults,
    fontSize: 24,
    lineHeight: 32,
  },
  globalH6: {
    ...fontDefaults,
    fontSize: 16,
    lineHeight: 24,
  },
  globalCTA: {
    fontFamily: "Inter-SemiBold",
    color: palette.Black,

    fontWeight: "600" as const,
    fontSize: 16,
    lineHeight: 24,
  },
  globalBody: {
    fontFamily: "Inter-Light",
    color: palette.Black,

    fontWeight: "300" as const,
    fontSize: 16,
    lineHeight: 24,
  },
  globalC1: {
    fontFamily: "Inter-Regular",
    color: palette.Black,

    fontWeight: "400" as const,
    fontSize: 16,
    lineHeight: 24,
  },
  globalC2: {
    fontFamily: "Inter-Regular",
    color: palette.Black,

    fontWeight: "400" as const,
    fontSize: 14,
    lineHeight: 18,
  },
  globalC3: {
    fontFamily: "Inter-Regular",
    color: palette.Black,

    fontWeight: "400" as const,
    fontSize: 12,
    lineHeight: 16,
  },
  globalLabel: {
    fontFamily: "Inter-Medium",
    color: palette.Black,

    fontWeight: "500" as const,
    fontSize: 12,
    lineHeight: 16,
  },
};

export type TypographyVariant = keyof typeof typography;
