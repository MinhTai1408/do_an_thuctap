import React, { createContext, useState } from "react";

export const SidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  {
    /*phần tử đầu tiên là giá trị ban đầu của biến trạng thái và phần tử thứ hai là một hàm setter để thay đổi giá trị của biến trạng thái. */
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
