import { Typography, ViewBox } from "~/components";
import { palette } from "~/theme/palette";

export function SelectClassroomHeader() {
  return (
    <ViewBox flexDirection="row" alignItems="center">
      <Typography variant="globalH5" color={palette.Snow}>
        Pick a classroom
      </Typography>
    </ViewBox>
  );
}
