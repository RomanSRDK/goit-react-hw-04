import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

Modal.setAppElement("#root");

function ImageModal({ modalIsOpen, closeModal, modalImage }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        src={modalImage.image}
        alt="Image"
        style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain" }}
      />
    </Modal>
  );
}

export default ImageModal;
