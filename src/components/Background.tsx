import { memo, ReactNode } from "react";

import { palette } from "~/theme/palette";

import { ViewBox } from "./ViewBox";

type BackgroundProps = {
  children: ReactNode;
};

export const Background = memo(({ children }: BackgroundProps) => (
  <ViewBox width="100%" height="100%" backgroundColor={palette.Purple500}>
    {children}
  </ViewBox>
));
