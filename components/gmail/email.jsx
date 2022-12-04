import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "@mui/material";
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
};

const Email = ({ email, onClose, onSuccess, onFailure }) => {
  const isNotPhish = () => {
    if (email.isPhish) {
      onFailure();
    } else {
      onSuccess();
    }
    onClose();
  };

  const isPhish = () => {
    if (email.isPhish) {
      onSuccess();
    } else {
      onFailure();
    }
    onClose();
  };

  return (
    <div className="">
      <button onClick={() => onClose()}>close</button>
      <div className="">{email.fromName}</div>
      <div className="">{email.fromAddress}</div>
      <div className="">{email.subject}</div>
      <div className="">{documentToReactComponents(email.body, options)}</div>
      <Button variant="contained" onClick={() => isPhish()}>
        Is Phish
      </Button>
      <Button variant="contained" onClick={() => isNotPhish()}>
        Is Not Phish
      </Button>
    </div>
  );
};

export default Email;
