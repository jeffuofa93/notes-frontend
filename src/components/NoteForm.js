import React from "react";
import { Button, HStack, Input } from "@chakra-ui/react";

const NoteForm = ({ addNote, newNote, handleNoteChange }) => {
  return (
    <form onSubmit={addNote}>
      <HStack mt="8">
        <Input
          value={newNote}
          onChange={handleNoteChange}
          variant={"filled"}
          placeholder={"new note..."}
        />
        <Button type="submit" colorScheme={"pink"} px={8}>
          save
        </Button>
      </HStack>
    </form>
  );
};

export default NoteForm;
