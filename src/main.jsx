import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import GithubCornerButton from "./components/GithubCornerButton.jsx";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navbar />
    <GithubCornerButton />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
