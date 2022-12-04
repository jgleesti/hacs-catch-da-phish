import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { yellow } from "@mui/material/colors";

const SubjectLine = ({ subject }) => {
  return (
    <Box style={{ display: "flex", justifyContent: 'space-between', marginBottom: "1em", marginLeft: '3.4em' }}>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4">{subject}</Typography>
        <LabelImportantOutlinedIcon style={{ color: yellow[500] }} />
      </Box>
      <Box style={{ display: "flex", alignItems: "center", gap: '1em' }}>
        <PrintOutlinedIcon />
        <LaunchOutlinedIcon />
      </Box>
    </Box>
  );
};

export default SubjectLine;
