/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { MdOutlineCheck } from "react-icons/md";

const tuser = {
  name: "Valery D.",
  username: "valerydremov",
  bio: "Founder of this place",
  verified: true,
  followers: 36,
  isFollowedByCurrentUser: false,
  joined: "Oct 18, '22",
  headerImage:
    "https://ripledd.com/profile/banner/e5242c6fae34fe161affad92144e0017041160909791.jpeg",
  avatar:
    "https://ripledd.com/profile/avatar/19971ad92b7ba4c3d12a34754ee49217029141809532.jpeg",
};

export default function MiniUserCard() {
  const [isFollowedByCurrentUser, setIsFollowedByCurrentUser] = useState(
    tuser.isFollowedByCurrentUser
  );
  return (
    <Card
      height={"min-content"}
      borderRadius={[0, 0, 10, 10]}
      boxShadow={[
        "none",
        "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      ]}
    >
      <Image src={tuser.headerImage} w={700} borderTopRadius={"inherit"} />
      <CardBody padding={"10px"}>
        <Wrap>
          <Avatar
            mt={"-7"}
            boxSize={"80px"}
            name={tuser.name}
            borderRadius={"10px"}
            bg={"black"}
            src={tuser.avatar}
            border={"3px white solid"}
            _dark={{
              border: "3px #070707 solid",
            }}
          />
          <div>
            <Heading size={["sm", "md"]}>
              <Wrap>
                {tuser.name}
                <Image
                  src="https://ripledd.com/img/verified.png"
                  boxSize={"5"}
                />
              </Wrap>
            </Heading>
            <Text color={"blue.300"}>@{tuser.username}</Text>
          </div>
        </Wrap>
        <Text fontSize={"sm"} mt={2}>
          {tuser.bio}
        </Text>
        <Wrap mt={3}>
          {isFollowedByCurrentUser ? (
            <Button
              rightIcon={<MdOutlineCheck />}
              variant={"outline"}
              colorScheme="green"
              onClick={() => {
                setIsFollowedByCurrentUser(false);
              }}
            >
              Following
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              rightIcon={<FaUserPlus />}
              _dark={{ color: "black" }}
              bgGradient={"linear(to-r, #fd4ba4, #9a87f4, #67c8ff, #7dffc1)"}
              _hover={{
                bgGradient: "linear(to-r, #fd4ba6, #9a87f9, #67c8f6, #7affc6)",
              }}
              onClick={() => {
                setIsFollowedByCurrentUser(true);
              }}
            >
              Follow
            </Button>
          )}
          <Button leftIcon={<FaUser />} variant={"outline"}>
            {tuser.followers}
          </Button>
        </Wrap>
      </CardBody>
    </Card>
  );
}
