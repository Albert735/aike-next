// contexts/AppContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for context
interface AppContextType {
  liked: Record<number, boolean>; // Correct type for liked state
  handleLiked: (index: number) => void; // Function to toggle liked state for a specific item
}

// Initialize the context with an undefined default
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  // Liked state as a record to track liked status of each item by index
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  // Function to toggle the liked status for a specific index
  const handleLiked = (index: number) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index],
    }));
  };

  return (
    <AppContext.Provider value={{ liked, handleLiked }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the AppContext
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export default AppContext;
