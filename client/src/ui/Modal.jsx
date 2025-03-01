import { cloneElement, createContext, useContext, useState } from "react";
import { CloseSquare } from "iconsax-react";
import { useClickOutSide } from "../hook/useClickOutSide";
import { createPortal } from "react-dom";

const modalContext = createContext();
function Modal({ children }) {
  const [isOpen, setIsOpen] = useState("");
  const close = () => setIsOpen("");
  const open = (openies) => setIsOpen(openies);
  console.log(isOpen);
  return (
    <modalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </modalContext.Provider>
  );
}
function Open({ openies, children }) {
  const { open } = useContext(modalContext);
  return cloneElement(children, { onClick: () => open(openies) });
}
function Window({ name, children }) {
  const { isOpen, close } = useContext(modalContext);
  const ref = useClickOutSide(close);
  if (isOpen !== name) return null;
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen flex z-[1000] backdrop-blur-sm bg-black-30 items-center  p-6  justify-center    bg-black/70">
      <div
        ref={ref}
        className="flex flex-col bg-[#F0F9FF] shadow-lg w-[80%] p-4 rounded-sm gap-4 "
      >
        <CloseSquare
          size="32"
          color="#2563EB"
          onClick={close}
          className="cursor-pointer"
        />
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>,
    document.body
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
