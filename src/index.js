import ReactDOM from "react-dom";
import App from "./App.js";
// import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
