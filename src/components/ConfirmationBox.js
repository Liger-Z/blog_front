const ConfirmationBox = ({
  title,
  description,
  confirmButton,
  cancelButton,
  handleConfirm,
}) => {
  const handleCancel = (event) => {
    event.preventDefault();
    const target = event.target;

    target.parentNode.parentNode.parentNode.classList.toggle('hide');
  }

  return (
    <div className="confirmationbox-container hide">
      <div className="confirmationbox">
        <h2>{title}</h2>
        <p>{description}</p>
        <form>
          <button id="cancel-button" onClick={handleCancel}>{cancelButton}</button>
          <button id="confirm-button" onClick={handleConfirm}>
            {confirmButton}
          </button>
        </form>
      </div>
      <div className="background-filter"></div>
    </div>
  );
};

export default ConfirmationBox;
