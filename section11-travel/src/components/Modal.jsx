import { useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open }) {
  const dialog = useRef();

  // if (open) {
  //   dialog.current.openModal()
  // } else {
  //   dialog.current.close()
  // }

  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};
