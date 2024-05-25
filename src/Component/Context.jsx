import { useContext, createContext, useState } from "react";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [isNewProfileClicked, setIsNewProfileClicked] = useState(false);

  const value = { isNewProfileClicked, setIsNewProfileClicked };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
function useAuth() {
  return useContext(Context);
}
export default useAuth;
