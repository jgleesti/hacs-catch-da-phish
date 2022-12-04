import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { yellow } from "@mui/material/colors";

import { useTheme } from "@mui/material/styles";

const SubjectLine = ({ subject }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1em",
        marginLeft: { md: "3.4em", sm: "0em", xs: "0em" },
      }}
    >
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Typography>{subject}</Typography>
        <LabelImportantOutlinedIcon style={{ color: yellow[500] }} />
      </Box>
      <Box sx={{ display: { md: "inherit", sm: "none", xs: "none" } }} style={{ gap: "1em" }}>
        <Typography>
          <small>3:25 PM (16 hours ago)</small>
        </Typography>
        <Box style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <PrintOutlinedIcon />
          <LaunchOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default SubjectLine;
