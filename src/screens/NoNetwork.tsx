import { Icon, Typography, ViewBox } from "~/components";
import { palette } from "~/theme/palette";

export function NoNetworkScreen() {
  return (
    <ViewBox flex={1} alignItems="center" justifyContent="center">
      <Icon name="error-outline" color={palette.Snow} size={78} />
      <ViewBox marginTop={16} marginHorizontal={40} alignItems="center">
        <Typography variant="globalH5" color={palette.Snow}>
          No network connection
        </Typography>
        <Typography variant="globalBody" textAlign="center" color={palette.Snow}>
          Make sure you have a stable intenet connection
        </Typography>
      </ViewBox>
    </ViewBox>
  );
}
