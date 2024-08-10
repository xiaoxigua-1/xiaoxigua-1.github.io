import { createContext } from "react";

export interface ThemeProps {
  theme: "light" | "dark";
}

export const ThemeContext = createContext<ThemeProps>({ theme: "dark" });
