import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiShow } from "react-icons/all";

const Notes = ({ notesToShow, toggleImportanceOf }) => {
  if (!notesToShow.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No notes added
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="strech"
    >
      {notesToShow.map((note) => (
        <HStack key={note.id}>
          <Text>{note.content}</Text>
          <Spacer />
          <IconButton
            aria-label="temp"
            icon={<BiShow />}
            onClick={() => toggleImportanceOf(note.id)}
            isRound="true"
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default Notes;
