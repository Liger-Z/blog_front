const ConfirmationBox = ({
  title,
  description,
  confirmButton,
  cancelButton,
  handleConfirm,
  handleCancel,
}) => {
  return (
    <div className="confirmationbox-container">
      <div className="confirmationbox">
        <h2>{title}</h2>
        <p>{description}</p>
        <form>
          <button className="cancel-button" onClick={handleCancel}>{cancelButton}</button>
          <button className="confirm-button" onClick={handleConfirm}>
            {confirmButton}
          </button>
        </form>
      </div>
      <div className="background-filter"></div>
    </div>
  );
};

export default ConfirmationBox;
