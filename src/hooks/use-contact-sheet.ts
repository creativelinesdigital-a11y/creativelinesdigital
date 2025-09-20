"use client";

import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface ContactSheetContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ContactSheetContext = createContext<ContactSheetContextType | undefined>(undefined);

export function useContactSheet() {
  const context = useContext(ContactSheetContext);
  if (context === undefined) {
    throw new Error("useContactSheet must be used within a ContactSheetProvider");
  }
  return context;
}
