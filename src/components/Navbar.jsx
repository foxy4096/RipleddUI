/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import ripleddDesktopLogoLight from "../asset/ripledd_logo_light.png";
import ripleddDesktopLogoDark from "../asset/ripledd_logo_dark.png";
import ripleddMobileLogoLight from "../asset/ripledd_logo_light_mobile.png";
import ripleddMobileLogoDark from "../asset/ripledd_logo_dark_mobile.png";
import { SearchIcon } from "@chakra-ui/icons";
import Toggle from "./Toggle";
import {
  MdOutlineComment,
  MdOutlineEdit,
  MdOutlineLogout,
  MdOutlineThumbUp,
  MdOutlineWifi,
} from "react-icons/md";
import { userTemplate } from "../userTemplate";

function Navbar({user, setUser}) {
  return (
    <Box
      px={30}
      py={"5px"}
      top={0}
      mb={["0px", "10px"]}
      position={"static"}
      boxSize={"full"}
      pos={"relative"}
      background={"transparent"}
      _dark={{
        boxShadow: "0px 0px 0px 1px #141414",
      }}
    >
      <Flex minWidth={"max-content"} alignItems={"center"}>
        <Image
          src={ripleddDesktopLogoLight}
          w={150}
          _dark={{ display: "none" }}
          display={"block"}
          objectFit="contain"
          alt="Ripledd Logo"
          hideBelow={"md"}
        />
        <Image
          src={ripleddMobileLogoLight}
          w={10}
          _dark={{ display: "none" }}
          hideFrom={"md"}
          objectFit="contain"
          alt="Ripledd Logo"
        />
        <Image
          src={ripleddDesktopLogoDark}
          w={150}
          _light={{ display: "none" }}
          objectFit="contain"
          alt="Ripledd Logo"
          hideBelow={"md"}
        />
        <Image
          src={ripleddMobileLogoDark}
          _light={{ display: "none" }}
          w={10}
          hideFrom={"md"}
          objectFit="contain"
          alt="Ripledd Logo"
        />
        <Spacer hideFrom={["md"]} />
        <InputGroup mx={2} hideBelow={["md"]} w={"50"} size={"lg"}>
          <Input
            _focus={{ borderColor: "#9e9e9e", boxShadow: "none !important" }}
            _active={{ boxShadow: "none !important" }}
            _hover={{ borderColor: "#9e9e9e" }}
            transition={"all 0.2s ease-in-out"}
            placeholder="Search"
            _dark={{
              borderColor: "#1e1e1e",
            }}
            borderColor={"#f0f0f0"}
            borderWidth={"2px"}
            _placeholder={{ color: "#4f4f4f" }}
          />
          <InputLeftElement pointerEvents={"none"}>
            <SearchIcon color={"gray.300"} />
          </InputLeftElement>
        </InputGroup>
        <Spacer />
        {user ? (
          <ButtonGroup gap={"1"} size={["sm", "md"]}>
            <Toggle />
            <Menu>
              <MenuButton as={Button} variant={"link"}>
                <Avatar src={user.avatar} size={"sm"} borderRadius={"10%"} />
              </MenuButton>
              <MenuList>
                <MenuItem icon={<MdOutlineEdit />}>Edit Profile</MenuItem>
                <MenuItem icon={<MdOutlineWifi />}>My Channels</MenuItem>
                <MenuItem icon={<MdOutlineThumbUp />}>Liked Content</MenuItem>
                <MenuItem icon={<MdOutlineComment />}>My Comments</MenuItem>
                <MenuItem
                  color={"red.400"}
                  fontWeight={500}
                  onClick={() => setUser(null)}
                  icon={<MdOutlineLogout />}
                >
                  Log Out
                </MenuItem>
              </MenuList>
            </Menu>
          </ButtonGroup>
        ) : (
          <ButtonGroup gap={"1"} size={["sm", "md"]}>
            <Toggle />
            <Button
              colorScheme="blue"
              variant={"outline"}
              onClick={() => setUser(userTemplate)}
            >
              Log In
            </Button>
            <Button colorScheme="blue">Sign Up</Button>
          </ButtonGroup>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
