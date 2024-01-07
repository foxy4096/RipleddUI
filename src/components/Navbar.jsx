import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import ripleddDesktopLogo from "../asset/ripledd_logo_light.png";
import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Box
      borderBottom={"1px #141414 solid"}
      color={"white"}
      px={30}
      pt={"5px"}
      mb={"6px"}
    >
      <Flex>
        <Image
          src={ripleddDesktopLogo}
          w={150}
          objectFit="contain"
          alt="Ripledd Logo"
        />

        <InputGroup ml={2} mr={["10px", "10px", "10px", "100px"]}>
          <InputLeftElement pointerEvents={"none"}>
            <SearchIcon color={"gray.300"} />
          </InputLeftElement>
          <Input
            _focus={{ borderColor: "#616161", boxShadow: "none !important" }}
            _active={{ boxShadow: "none !important"}}
            _hover={{ borderColor: "#616161" }}
            placeholder="Search..."
            borderColor={"#1e1e1e"}
            borderWidth={"2px"}
            _placeholder={{ color: "#4f4f4f" }}
            backgroundColor={"#141414"}
            width={{ base: "100%", md: "50%" }}
          />
        </InputGroup>
        <Stack direction={"row"}>
          <Button colorScheme="blue" variant={"outline"}>
            Log In
          </Button>
          <Button colorScheme="blue">Sign Up</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Navbar;
