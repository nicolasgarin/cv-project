export interface UserOp {
    option: string;
  }
  
  export type UserOpContextType = {
    theme: UserOp["option"];
    lang: UserOp["option"];
    toggleTheme: () => void;
    toggleLang: () => void;
  };
  