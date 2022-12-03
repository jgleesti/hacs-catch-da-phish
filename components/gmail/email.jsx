const Email = ({ email, onClose }) => {
  return (
    <div className="">
      <button onClick={() => onClose()}>close</button>
      <div className="">{email.from}</div>
      <div className="">{email.subject}</div>
      <div className="">{email.message}</div>
    </div>
  );
};

export default Email;
