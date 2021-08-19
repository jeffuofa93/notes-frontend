import React, { useState } from "react";
import { Button, HStack, Input } from "@chakra-ui/react";

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    createNote({
      content: newNote,
      important: Math.random() > 0.5,
    });

    setNewNote("");
  };

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
