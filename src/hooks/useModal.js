import usePortal from 'react-useportal';

export const useModal = ({ onOpen, ...config } = {}) => {
  const { isOpen, togglePortal, openPortal, closePortal, Portal } = usePortal({
    onOpen(args) {
      const { portal } = args;
      portal.current.className = 'modal';
      document.body.style.overflow = 'hidden';
      if (onOpen) onOpen(args);
    },
    onClose(args) {
      const { portal } = args;
      portal.current.className = '';
      document.body.style.overflow = 'auto';
    },
    ...config,
  });

  return {
    Modal: Portal,
    toggleModal: togglePortal,
    openModal: openPortal,
    closeModal: closePortal,
    isOpen,
  };
};

export default useModal;
