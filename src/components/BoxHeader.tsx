import FlexBetween                            from "@/components/FlexBetween";
import { Box, Palette, Typography, useTheme } from "@mui/material";
import { PaletteColor }                       from "@mui/material/styles/createPalette";

type Props = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  sideText: string;
};

const BoxHeader = ({icon, title, subtitle, sideText}: Props) => {
  const { palette }: Palette = useTheme();
  
  return (
    <FlexBetween
      color={ palette.grey[400] }
      margin="1.5rem 1rem 0 1rem"
    >
      <FlexBetween>
        { icon }
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            { title }
          </Typography>
          <Typography variant="h6">
            { subtitle }
          </Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={ palette.secondary[500] }>
        { sideText }
      </Typography>
    </FlexBetween>
  );
};
export default BoxHeader;
