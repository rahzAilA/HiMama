import { Icon, Typography, ViewBox } from "~/components";
import { palette } from "~/theme/palette";

export function ErrorScreen() {
  return (
    <ViewBox flex={1} alignItems="center" justifyContent="center">
      <Icon name="error-outline" color={palette.Snow} size={78} />
      <ViewBox marginTop={16} marginHorizontal={40} alignItems="center">
        <Typography variant="globalH5" color={palette.Snow}>
          Ooops.. that&apos;s an error
        </Typography>
        <Typography variant="globalBody" textAlign="center" color={palette.Snow}>
          Something went wrong at our side. Please come back later.
        </Typography>
      </ViewBox>
    </ViewBox>
  );
}
