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
import ripleddDesktopLogo from "../asset/ripledd_logo.png";
import ripleddMobileLogo from "../asset/m_logo_col.png";
import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Box px={30} pt={"5px"} mb={"6px"}>
      <Flex minWidth={"max-content"} alignItems={"center"}>
        <Image
          src={ripleddDesktopLogo}
          w={150}
          objectFit="contain"
          alt="Ripledd Logo"
          hideBelow={"md"}
        />
        <Image
          src={ripleddMobileLogo}
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
