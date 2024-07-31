import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserOp, UserOpContextType } from "../@types/userOp";

interface UserOptionsStore extends UserOpContextType {
  setTheme: (theme: UserOp["option"]) => void;
  setLang: (lang: UserOp["option"]) => void;
}

export const useUserOptionsStore = create<UserOptionsStore>()(
  persist(
    (set) => ({
      theme: "light",
      lang: "es",
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === "light" ? "dark" : "light" 
      })),
      toggleLang: () => set((state) => ({ 
        lang: state.lang === "es" ? "en" : "es" 
      })),
      setTheme: (theme) => set({ theme }),
      setLang: (lang) => set({ lang }),
    }),
    {
      name: 'user-options-storage',
      getStorage: () => localStorage,
    }
  )
)

// Hook para usar en los componentes
export const useUserOptions = () => {
  const { theme, lang, toggleTheme, toggleLang } = useUserOptionsStore()
  return { theme, lang, toggleTheme, toggleLang }
}
