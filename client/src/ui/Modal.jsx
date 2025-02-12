import { cloneElement, createContext, useContext, useState } from "react";

const modalContext = createContext();
function Modal({ children }) {
  const [isopen, setIsopen] = useState("");
  const close = () => setIsopen("");
  const open = (openies) => setIsopen(openies);
  return (
    <modalContext.Provider value={{ isopen, close, open }}>
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
    <div className="bg-black/50 fixed top-0 left-0 w-full h-screen blur-2xl">
      <div className="flex flex-col">
        <p>close</p>
        <div>{cloneElement(children, { onCLose: close })}</div>
      </div>
    </div>
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
