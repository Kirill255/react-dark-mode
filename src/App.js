import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import logo from "./logo.svg";

import { useTheme } from "./ThemeContext";
import { buttonBackgroundColor, buttonTextColor } from "./theme";

import "./App.css";

const Button = styled.button`
  background: ${buttonBackgroundColor};
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`;

// theme приходит из ThemeContext https://www.styled-components.com/docs/advanced#getting-the-theme-without-styled-components
function App() {
  const theme = useContext(ThemeContext); // получаем цвет
  const themeToggle = useTheme(); // возвращает из контекста { toggle: toggle }

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        <Button onClick={() => themeToggle.toggle()}>
          {theme.mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
      </p>
    </header>
  );
}

export default App;
