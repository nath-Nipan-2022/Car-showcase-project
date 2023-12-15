import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function useTheme() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return {
    theme,
    changeTheme,
  };
}
