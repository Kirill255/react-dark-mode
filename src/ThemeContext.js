import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";

import { backgroundColor, textColor } from "./theme";

const ThemeToggleContext = React.createContext();

export const useTheme = () => useContext(ThemeToggleContext);

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: "light"
  });

  const toggle = () => {
    const mode = themeState.mode === "light" ? "dark" : "light";
    setThemeState({ mode: mode });
  };

  // toggle ф-ция передаётся через реактовский контекст, а цвет темы передаётся через ThemeProvider из styled-components
  // поэтому toggle мы также достаём из нашего контекста, а цвет из хока withTheme
  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={{ mode: themeState.mode }}>
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
