import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import GithubCornerButton from "./components/GithubCornerButton.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <GithubCornerButton />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
