import { cloneElement, createContext, useContext, useState } from "react";

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
  if (isOpen !== name) return null;
  return (
    <div className=" flex items-center justify-center fixed top-0 left-0 w-full h-screen   bg-black/70">
      <div className="flex flex-col bg-white w-80 h-80">
        <button onClick={close}>close</button>
        <div>{cloneElement(children, { onCLose: close })}</div>
      </div>
    </div>
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
