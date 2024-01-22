import { ChakraProvider } from "@chakra-ui/react";
import {useState} from "react";
import theme from "../theme";
import Navbar from "./Navbar";
import GithubCornerButton from "./GithubCornerButton";
import App from "../App";
import { userTemplate } from "../userTemplate";


// This Component acts as an wrapper to share the global states like user, etc.

const Wrapper = () => {
const [user, setUser] = useState(userTemplate);
  return (
    <ChakraProvider theme={theme}>
      <Navbar user={user} setUser={setUser} />
      <GithubCornerButton />
      <App user={user} setUser={setUser} />
      <br />
    </ChakraProvider>
  );
};

export default Wrapper;
