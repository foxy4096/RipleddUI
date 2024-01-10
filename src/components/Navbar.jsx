import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import ripleddDesktopLogoLight from "../asset/ripledd_logo.png";
import ripleddDesktopLogoDark from "../asset/ripledd_logo_dark.png";
import ripleddMobileLogoLight from "../asset/m_logo_col.png";
import { SearchIcon } from "@chakra-ui/icons";
import Toggle from "./Toggle";

function Navbar() {
  return (
    <Box
      px={30}
      py={"5px"}
      mb={"6px"}
      top={0}
      position={"static"}
      boxSize={"full"}
      pos={"relative"}
      background={"transparent"}
      boxShadow={'0px 0px 0px 1px #141414'}
    >
      <Flex minWidth={"max-content"} alignItems={"center"}>
        <Image
          src={ripleddDesktopLogoLight}
          w={150}
          _dark={{ display: "none" }}
          objectFit="contain"
          alt="Ripledd Logo"
          hideBelow={"md"}
        />
        <Image
          src={ripleddDesktopLogoDark}
          w={150}
          _dark={{ display: "block" }}
          objectFit="contain"
          display={"none"}
          alt="Ripledd Logo"
          hideBelow={"md"}
        />
        <Image
          src={ripleddMobileLogoLight}
          w={12}
          hideFrom={"md"}
          objectFit="contain"
          alt="Ripledd Logo"
        />
        <Spacer hideFrom={["md"]} />
        <InputGroup mx={2} hideBelow={["md"]} w={"50"}>
          <Input
            _focus={{ borderColor: "#9e9e9e", boxShadow: "none !important" }}
            _active={{ boxShadow: "none !important" }}
            _hover={{ borderColor: "#9e9e9e" }}
            transition={"all 0.2s ease-in-out"}
            placeholder="Search"
            borderColor={"#f0f0f0"}
            borderWidth={"2px"}
            _placeholder={{ color: "#4f4f4f" }}
          />
          <InputLeftElement pointerEvents={"none"}>
            <SearchIcon color={"gray.300"} />
          </InputLeftElement>
        </InputGroup>
        <Spacer />
        <ButtonGroup gap={"2"}>
          <Toggle/>
          <Button colorScheme="blue" variant={"outline"}>
            Log In
          </Button>
          <Button colorScheme="blue">Sign Up</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Navbar;
