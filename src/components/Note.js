import React from "react";
import {
  Button,
  Flex,
  HStack,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/all";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <Flex direction="row">
      <ListItem justifyContent="right">
        <ListIcon as={BiPencil} color="gray.500" />
        {note.content}
        <Button onClick={toggleImportance} ml={20}>
          {label}
        </Button>
      </ListItem>
    </Flex>
    // <li>
    //   {note.content}
    //   <button onClick={toggleImportance}>{label}</button>
    // </li>
  );
};

export default Note;
