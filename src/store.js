import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logoutUser: () => set({ user: null }),
  }))
);

//: Another Way to do that with "state"
// const useAuthStore = create(
//   devtools((set) => ({
//     user: null,
//     setUser: (data) => set((state) => ({ user: data })),
//     logoutUser: () => set({ user: null }),
//   }))
// );
