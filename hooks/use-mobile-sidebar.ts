import { create } from "zustand";

// Define a type for the mobile sidebar store
type MobileSidebarStore = {
  isOpen: boolean; // A boolean indicating whether the sidebar is open
  onOpen: () => void; // A function to open the sidebar
  onClose: () => void; // A function to close the sidebar
};

// Create the mobile sidebar store using zustand
export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false, // By default, the sidebar is not open
  onOpen: () => set({ isOpen: true }), // The onOpen function sets isOpen to true
  onClose: () => set({ isOpen: false }), // The onClose function sets isOpen to false
}));
