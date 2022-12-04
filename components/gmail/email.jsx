import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import ReplyIcon from "@mui/icons-material/Reply";
import ForwardIcon from "@mui/icons-material/Forward";

import SubjectLine from "./subject-line";
import Toolbar from "./toolbar";
import SendingDetails from "./sending-details";

const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
};

const style = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
  maxHeight: '100vh',
  overflow: 'auto',
  [theme.breakpoints.up("md")]: {
    width: 850,
  },
  [theme.breakpoints.down("md")]: {
    width: '100%',
  },
});

const Email = ({ email, onSuccess, onFailure, emailNumber, totalEmails, onClose }) => {
  const isNotPhish = () => {
    if (email.isPhish) {
      onFailure();
    } else {
      onSuccess();
    }
  };

  const isPhish = () => {
    if (email.isPhish) {
      onSuccess();
    } else {
      onFailure();
    }
  };

  return (
    <Box sx={style}>
      <Toolbar emailNumber={emailNumber} totalEmails={totalEmails} onClose={onClose} />
      <SubjectLine subject={email.subject} />

      <SendingDetails
        fromName={email.fromName}
        fromAddress={email.fromAddress}
        />

      <Box style={{ marginLeft: "3.4em", marginBottom: "2em" }}>
        {documentToReactComponents(email.body, renderOptions)}
        <Box>
          <Button
            variant="outlined"
            startIcon={<ReplyIcon />}
            style={{
              borderRadius: "25px",
              marginRight: "1em",
              textTransform: "none",
            }}
            >
            Reply
          </Button>
          <Button
            variant="outlined"
            startIcon={<ForwardIcon />}
            style={{ borderRadius: "25px", textTransform: "none" }}
            >
            Forward
          </Button>
        </Box>
      </Box>

      <hr />

            
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="contained">
          <Button color="warning" onClick={isPhish}>
            Is Phish
          </Button>
          <Button color="info" onClick={isNotPhish}>
            Is Not Phish
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Email;
