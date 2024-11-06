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
  const [cartItems, setCartItems] = useState<
    {
      id: number;
      name: string;
      description: string;
      image: string;
    }[]
  >([]);

  // Function to toggle the liked status for a specific index
  const handleLiked = (index: number) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index],
    }));
  };

  //add to cart functionality
  const addToCart = (id: number) => {
    // Check if the item already exists in the cart
    const isSelectedItemInCart = (id: number) => {
      return cartItems.findIndex((item) => item.id === id) !== -1;
    };

    // Log whether the item is in the cart
    if (isSelectedItemInCart(id)) {
      console.log(`Item with id ${id} is already in the cart.`);
    } else {
      console.log(`Item with id ${id} is not in the cart.`);
    }

    // Add the item if it's not in the cart
    if (!isSelectedItemInCart(id)) {
      // Item is not in the cart; add it
      setCartItems([
        ...cartItems,
        { id, quantity: 1 /* add other properties as needed */ },
      ]);
    } else {
      // Item is already in the cart; update its quantity
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }

    console.log("Item added to cart successfully.");
  };

  return (
    <AppContext.Provider
      value={{ liked, handleLiked, addToCart, cartItems, setCartItems }}
    >
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
