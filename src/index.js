import ReactDOM from "react-dom";
import App from "./App.js";
// import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
