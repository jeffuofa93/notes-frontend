import React, { useState } from "react";
import { Button, VStack } from "@chakra-ui/react";

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <VStack>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible} align={"center"}>
        {props.children}
        <Button onClick={toggleVisibility}>cancel</Button>
      </div>
    </VStack>
  );
};

export default Togglable;
