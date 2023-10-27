import CustomModal from '../../CustomModal';

function AddFile({ open, onClose }) {
  return (
    <CustomModal
      title="Upload file"
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    ></CustomModal>
  );
}

export default AddFile;
