import React, { useState } from "react";
import { Button, Input, VStack } from "@chakra-ui/react";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("logging in with", username);
    const user = await props.attemptLogin({ username, password });
    if (user) {
      setUsername("");
      setPassword("");
    }

    // try {
    //   // const user = await loginService.login({ username, password });
    //   const user = attemptLogin({ username, password });
    //   window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
    //   noteService.setToken(user.token);
    //   setUser(user);
    //   setUsername("");
    //   setPassword("");
    // } catch (exception) {
    //   handleErrorMessageChange("Wrong Credentials", "red");
    // }
  };

  return (
    <form onSubmit={handleLogin}>
      <VStack p={8} spacing={2}>
        <Input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button type="submit" colorScheme={"pink"} px={8} alignSelf={"left"}>
          login
        </Button>
      </VStack>
    </form>
  );
};

export default LoginForm;
