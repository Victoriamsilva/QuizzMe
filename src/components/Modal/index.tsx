import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height: 160,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  h2: {
    textAlign: 'center',
    paddingBottom: '40px',
  }
};

interface ModalProps {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  children: JSX.Element[] | JSX.Element;
}

export default function ModalComponent({ open, openModal, closeModal, children }: ModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
          <Button onClick={closeModal} text='fechar' />
        </Box>
      </Modal>
    </div>
  );
}
