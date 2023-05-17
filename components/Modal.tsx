import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // use showModal() function instead of the "open" attribute, to make the dialog acts as a modal
  useEffect(() => {
    if (props.show && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [props.show]);

  const handleClickOutside = (event: React.PointerEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      props.handleClose();
    }
  };

  return (
    <dialog
      className="text-center px-0 py-0 rounded-[0.3rem]"
      ref={dialogRef}
      onClose={props.handleClose}
      onPointerDown={handleClickOutside}
    >
      <div className="border-b-0 px-4 pt-4 pb-0 flex justify-end w-[498px] h-[32px]">
        <button onClick={props.handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 opacity-50"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
      <div className="pb-8 px-4 pt-4 flex flex-auto flex-col items-center w-[498px] h-[324.84px]">
        {props.children}
      </div>
    </dialog>
  );
};

export default Modal;
