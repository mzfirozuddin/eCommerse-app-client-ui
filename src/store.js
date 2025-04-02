import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        logoutUser: () => set({ user: null }),
      }),
      { name: "user-store" }
    )
  )
);

//: Another Way to do that with "state"
// export const useAuthStore = create(
//   devtools((set) => ({
//     user: null,
//     setUser: (data) => set(() => ({ user: data })),
//     logoutUser: () => set({ user: null }),
//   }))
// );
