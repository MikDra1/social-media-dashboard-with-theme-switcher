/* eslint-disable react/prop-types */
import {
    createContext,
    useContext,
    useState,
  } from "react";
  
  
  const SocialMediaContext = createContext();
  
  
  function SocialMediaProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true)
    
  
    return (
      <SocialMediaContext.Provider
        value={{
            darkMode,
            setDarkMode
        }}
      >
        {children}
      </SocialMediaContext.Provider>
    );
  }
  
  function useSocialMedia() {
    const context = useContext(SocialMediaContext);
    if (context === undefined)
      throw new Error("citiesContext was used outside the CitiesProvider");
    return context;
  }
  
  export { SocialMediaProvider, useSocialMedia };
  