import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Box from "@mui/material/Box";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Divider from "@mui/material/Divider";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { useTheme } from "@mui/material/styles";

const iconGroupStyle = {
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  bgcolor: "background.paper",
  color: "text.secondary",
  "& hr": {
    mx: 0.5,
  },
};

const containerStyle = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 3,
});

const Toolbar = ({ emailNumber, totalEmails, onClose }) => {
  const theme = useTheme();
  console.log(theme.breakpoints.up("md"));

  return (
    <Box sx={containerStyle}>
      <Box sx={iconGroupStyle}>
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            mr: "13px",
          }}
        >
          <ArrowBackOutlinedIcon />
        </IconButton>
        <IconButton size="small">
          <ArchiveOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <ReportGmailerrorredOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>

        <Box sx={{ display: { md: "inherit", sm: "none", xs: "none" } }}>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton size="small">
            <EmailOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <AccessTimeOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <AddTaskOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box sx={{ display: { md: "inherit", sm: "inherit", xs: "none" } }}>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton size="small">
            <DriveFileMoveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <LabelOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        <IconButton size="small">
          <MoreVertOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={iconGroupStyle}>
        <Typography>{`${emailNumber || 0} of ${totalEmails | 0}`}</Typography>
        <IconButton size="small">
          <ChevronLeftOutlinedIcon
            fontSize="small"
            sx={{ display: { md: "inherit", sm: "inherit", xs: "none" } }}
          />
        </IconButton>
        <IconButton size="small">
          <ChevronRightOutlinedIcon
            fontSize="small"
            sx={{ display: { md: "inherit", sm: "inherit", xs: "none" } }}
          />
        </IconButton>
        <Box sx={{ display: { md: "inherit", sm: "none", xs: "none" } }}>
          <IconButton size="small">
            <KeyboardOutlinedIcon fontSize="small" style={{ marginRight: 0 }} />
          </IconButton>
          <IconButton size="small">
            <ArrowDropDownOutlinedIcon
              fontSize="small"
              style={{ marginLeft: 0 }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Toolbar;
