import { ReactNode, createContext, useState } from "react";

type theme = "light" | "dark";
type ThemeContextType = {
  theme: theme;
  changeTheme: (theme: theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  if (
    theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.style.colorScheme = "dark";
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "";
    localStorage.setItem("theme", "");
  }

  const changeTheme = (theme: theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
