import React from "react";
import { Badge } from "@chakra-ui/react";

const Notification = ({ message, color }) => {
  if (message === null) {
    return null;
  }

  return (
    <Badge colorScheme={color.toString()} p="4" m="4" borderRadius="lg">
      {message}
    </Badge>
  );
};

export default Notification;
