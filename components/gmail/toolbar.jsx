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

const iconGroupStyle = {
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  bgcolor: "background.paper",
  color: "text.secondary",
  "& svg": {
    m: 1.5,
  },
  "& hr": {
    mx: 0.5,
  },
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 3,
};

const Toolbar = ({ emailNumber, totalEmails }) => {
  return (
    <Box sx={containerStyle}>
      <Box sx={iconGroupStyle}>
        <ArrowBackOutlinedIcon fontSize="small" xs={{ marginRight: 3 }} />
        <ArchiveOutlinedIcon fontSize="small" />
        <ReportGmailerrorredOutlinedIcon fontSize="small" />
        <DeleteOutlineOutlinedIcon fontSize="small" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <EmailOutlinedIcon fontSize="small" />
        <AccessTimeOutlinedIcon fontSize="small" />
        <AddTaskOutlinedIcon fontSize="small" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <DriveFileMoveOutlinedIcon fontSize="small" />
        <LabelOutlinedIcon fontSize="small" />
        <MoreVertOutlinedIcon fontSize="small" />
      </Box>
      <Box sx={iconGroupStyle}>
        <Typography>{`${emailNumber || 0} of ${totalEmails | 0}`}</Typography>
        <ChevronLeftOutlinedIcon fontSize="small" />
        <ChevronRightOutlinedIcon fontSize="small" />
        <KeyboardOutlinedIcon fontSize="small" style={{ marginRight: 0 }} />
        <ArrowDropDownOutlinedIcon fontSize="small" style={{ marginLeft: 0 }} />
      </Box>
    </Box>
  );
};

export default Toolbar;
