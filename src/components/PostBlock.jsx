import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { FaRegComment } from "react-icons/fa";

import { RxLoop } from "react-icons/rx";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaFire } from "react-icons/fa";

import { HiDotsVertical } from "react-icons/hi";

const post = {
  id: 1,
  content: "Very Cool Desert Scene 🏜",
  imageUrl:
    "https://images.pexels.com/photos/998646/pexels-photo-998646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  lits: 5,
  views: 42,
  comments: 4,
  reposts: 7,
  user: {
    name: "Aditya Priyadarshi",
    username: "foxy4096",
    avatar: "https://avatars.githubusercontent.com/u/54215788?v=4",
  },
  hasUserLikes: true,
  hasUserReposted: true,
};

export default function PostBlock() {
  return (
    <Card borderRadius={[0, 0, 10]} borderWidth={1} borderColor={'gray.200'}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={post.user.name} src={post.user.avatar} />

            <Box>
              <Heading size="sm">{post.user.name}</Heading>
              <Text fontSize={"smaller"}>
                <Link color={"blue.500"}>@{post.user.username}</Link>
              </Text>
            </Box>
          </Flex>
          <Menu>
            <MenuButton
              as={IconButton}
              variant={"ghost"}
              aria-label="More"
              icon={<HiDotsVertical />}
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      {post.imageUrl && (
        <Image
          p={6}
          borderRadius={"35px"}
          src={post.imageUrl}
          alt="Post Image 🖼"
        />
      )}
      <CardBody>
        <Text fontWeight={500}>{post.content}</Text>
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="no-wrap"
        sx={{
          "& > button": {
            mx: "12px",
          },
        }}
      >
        <Button
          flex="1"
          variant={["ghost", "outline"]}
          borderColor={"gray.300"}
          borderRadius={"5px"}
          leftIcon={<FaFire color={`${post.hasUserLikes && "#e05846"}`} />}
        >
          {post.lits}
        </Button>
        <Button
          flex="1"
          variant={["ghost", "outline"]}
          borderColor={"gray.300"}
          borderRadius={"5px"}
          leftIcon={<RxLoop color={`${post.hasUserLikes && "green"}`} />}
        >
          {post.reposts}
        </Button>
        <Button
          flex="1"
          variant={["ghost", "outline"]}
          borderColor={"gray.300"}
          borderRadius={"5px"}
          leftIcon={<FaRegComment />}
        >
          {post.comments}
        </Button>
      </CardFooter>
    </Card>
  );
}
