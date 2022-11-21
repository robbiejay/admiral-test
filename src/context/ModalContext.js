import { createContext } from "react";

const modalContext = createContext({
  open: false,
  setModalOpen: (open) => {}
});

export default modalContext;
