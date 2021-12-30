import { TouchableBox, Typography } from "~/components";
import { palette } from "~/theme/palette";
import { height } from "~/utils/dimensions";

export function EmptyList() {
  return (
    <TouchableBox alignItems="center" justifyContent="center" height={height(75)} flex={1}>
      <Typography variant="globalBody" color={palette.Snow}>
        This class is empty
      </Typography>
    </TouchableBox>
  );
}
