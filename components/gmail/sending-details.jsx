import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const SendingDetails = ({ fromName, fromAddress }) => {
  return (
    <Box style={{ display: "flex", gap: "1em" }}>
      <Box>
        <Avatar alt={fromName} />
      </Box>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography>
          <strong>{fromName}</strong>
          <small style={{ display: "inline-block", marginLeft: "1em" }}>
            {"<"}
            {fromAddress}
            {">"}
          </small>
        </Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography>to me</Typography>
          <ArrowDropDownOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default SendingDetails;
