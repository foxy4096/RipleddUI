//Toggle.js

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

function Toggle() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Mode Change"
      variant="outline"
      colorScheme="black"
      icon={useColorModeValue(<BsMoon />, <BsSun />)}
      onClick={toggleColorMode}
    />
  );
}

export default Toggle;
