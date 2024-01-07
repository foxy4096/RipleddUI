import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Container } from "@chakra-ui/react";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <Container maxW={["container.sm", "container.md", "container.lg"]}>
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>
);
