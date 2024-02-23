/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import ripleddDesktopLogoDark from "../asset/ripledd_logo_dark.png";
import ripleddMobileLogoDark from "../asset/ripledd_logo_dark_mobile.png";
import {
  MdOutlineComment,
  MdOutlineEdit,
  MdOutlineLogout,
  MdOutlineThumbUp,
  MdOutlineWifi,
} from "react-icons/md";
import { userTemplate } from "../userTemplate";
import { Link } from "react-router-dom";

function CenterPageNavbar({ user, setUser }) {
  return (
    <Box
      px={30}
      py={"5px"}
      top={0}
      mb={0}
      position={"static"}
      boxSize={"full"}
      background={"#866DFF"}
    >
      <Flex alignItems={"center"} wrap={"wrap-reverse"}>
        <Link to={"/"}>
          <Image
            src={ripleddDesktopLogoDark}
            w={150}
            objectFit="contain"
            alt="Ripledd Logo"
            hideBelow={"md"}
          />
          <Image
            src={ripleddMobileLogoDark}
            w={10}
            hideFrom={"md"}
            objectFit="contain"
            alt="Ripledd Logo"
          />
        </Link>

        <Spacer hideFrom={["md"]} />
        <Spacer />
        <ButtonGroup variant={"link"} spacing={6}>
          <Button fontWeight={"800"} color={"white"}>
            Home
          </Button>
          <Button fontWeight={"800"} color={"white"}>
            Discover
          </Button>
          <Button fontWeight={"800"} color={"white"} hideBelow={["md"]}>
            FAQ
          </Button>
          <Button fontWeight={"800"} color={"white"} hideBelow={["md"]}>
            Terms
          </Button>
          <Button fontWeight={"800"} color={"white"} hideBelow={["md"]}>
            Developer
          </Button>
        </ButtonGroup>
        <Spacer />
        {user ? (
          <ButtonGroup gap={"1"} size={["sm", "md"]}>
            <Menu>
              <MenuButton as={Button} variant={"link"}>
                <Avatar src={user.avatar} size={"sm"} />
              </MenuButton>
              <MenuList>
                <Link to={"/user-profile/"}>
                  <MenuItem icon={<MdOutlineEdit />}>Edit Profile</MenuItem>
                </Link>
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
            <Button
              onClick={() => setUser(userTemplate)}
              fontWeight={"800"}
              fontFamily={"arial"}
              bg={"white"}
              color={"#866DFF"}
              _hover={{
                opacity: 0.8,
              }}
            >
             Join Ripledd!
            </Button>
          </ButtonGroup>
        )}
      </Flex>
    </Box>
  );
}

export default CenterPageNavbar;
