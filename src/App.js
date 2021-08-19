import React, { useEffect, useState } from "react";
import Notification from "./components/Notification";
import noteService from "./services/notes";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { BiShow } from "react-icons/all";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import loginService from "./services/login";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [color, setColor] = useState("red");
  const [user, setUser] = useState("");

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);

  const attemptLogin = async ({ username, password }) => {
    try {
      const user = await loginService.login({ username, password });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      setUser(user);
      noteService.setToken(user.token);
    } catch (exception) {
      handleErrorMessageChange("Wrong Credentials", "red");
    }
  };

  const addNote = (noteObject) => {
    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
    });
  };

  const handleErrorMessageChange = (newMessage, color) => {
    setErrorMessage(newMessage);
    setColor(color);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch(() => {
        handleErrorMessageChange(
          `Note '${note.content}' was already removed from server`,
          "red"
        );
      });
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const noteForm = () => (
    <Togglable buttonLabel={"new note"}>
      <NoteForm createNote={addNote} user={user} />
    </Togglable>
  );

  const loginForm = () => (
    <Togglable buttonLabel={"login"}>
      <LoginForm attemptLogin={attemptLogin} />
    </Togglable>
  );

  return (
    <VStack spacing={4} p={8} height="100vh">
      <ColorModeSwitcher alignSelf="flex-end" mr={"8"} isRound={"true"} />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
        bgClip="text"
      >
        Notes
      </Heading>
      <Notification message={errorMessage} color={color} />
      {user === "" ? (
        loginForm()
      ) : (
        <VStack>
          <Box
            bg="cyan.300"
            w="100%"
            p={4}
            color="purple.600"
            textAlign="center"
          >
            {user.name} logged-in
          </Box>
          {noteForm()}
        </VStack>
      )}

      <Button onClick={() => setShowAll(!showAll)} leftIcon={<BiShow />}>
        show {showAll ? "important" : "all"}
      </Button>
      <Notes
        notesToShow={notesToShow}
        toggleImportanceOf={toggleImportanceOf}
      />
    </VStack>
  );
};

export default App;
