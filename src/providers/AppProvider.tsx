import React, { createContext, useContext, ReactNode, useState } from "react";

type SizeContext = {
  screenWidth: number;
  screenHeight: number;
};
interface AppContextType {
  size: SizeContext;
  setSize: ({ screenWidth, screenHeight }: SizeContext) => void;
}

const defaultContext: AppContextType = {
  size: { screenWidth: 0, screenHeight: 0 },
  setSize: () => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [size, setSize] = useState<SizeContext>({
    screenHeight: 0,
    screenWidth: 0,
  });

  const value = {
    size,
    setSize,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
