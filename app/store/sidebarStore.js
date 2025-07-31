import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isCollapsed: false,
  activeItem: "dashboard",

  toggleSidebar: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  setActiveItem: (item) => set({ activeItem: item }),
  setSidebarState: (newState) => set((state) => ({ ...state, ...newState })),
}));
