/* eslint-disable react/prop-types */
import {
  MdOutlineReport,
  MdDeleteOutline,
  MdOutlineShare,
} from "react-icons/md";

import { FaRegComment } from "react-icons/fa";

import { RxLoop } from "react-icons/rx";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

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
  Wrap,
} from "@chakra-ui/react";
import { FaFire } from "react-icons/fa";

import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { Remark } from "react-remark";

export default function PostBlock({ post }) {
  const [lits, setLits] = useState(post.lits);
  const [reposts, setReposts] = useState(post.reposts);
  const [comments, setComments] = useState(post.comments);

  return (
    <Card borderRadius={[0, 0, 10]} mb={["0", "3"]}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name={post.user.name}
              src={post.user.avatar}
              borderRadius={"10%"}
            />

            <Box>
              <Heading size="sm">
                <Wrap>
                  {post.user.name}{" "}
                  <Image
                    src="https://ripledd.com/img/verified-contributor.png"
                    boxSize={"5"}
                  />
                </Wrap>
              </Heading>
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
              <MenuItem icon={<MdOutlineShare />}>Share</MenuItem>
              <MenuItem icon={<MdOutlineReport />}>Report</MenuItem>
              <MenuItem icon={<MdDeleteOutline />}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      {post.imageUrl && (
        <Image
          p={6}
          src={post.imageUrl}
          borderRadius={"35px"}
          alt="Post Image 🖼"
        />
      )}
      <CardBody>
        <Text fontWeight={500}>
          <Prose>
            <Remark>{post.content}</Remark>
          </Prose>
        </Text>
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="no-wrap"
        sx={{
          "& > button": {
            mx: "12px",
          },
          "& > button:hover": {
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
          onClick={() => setLits(lits + 1)}
        >
          {lits}
        </Button>
        <Button
          flex="1"
          variant={["ghost", "outline"]}
          borderColor={"gray.300"}
          borderRadius={"5px"}
          onClick={() => setReposts(reposts + 1)}
          leftIcon={<RxLoop color={`${post.hasUserLikes && "green"}`} />}
        >
          {reposts}
        </Button>
        <Button
          flex="1"
          variant={["ghost", "outline"]}
          borderColor={"gray.300"}
          borderRadius={"5px"}
          onClick={() => setComments(comments + 1)}
          leftIcon={<FaRegComment />}
        >
          {comments}
        </Button>
      </CardFooter>
    </Card>
  );
}
