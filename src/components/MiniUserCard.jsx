/* eslint-disable react/prop-types */
import { useState } from "react";
import defaultBannerImage from "../asset/default-banner.png";
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
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineCheck } from "react-icons/md";
import FollowerModal from "./FollowerModal";

const tuser = {
  name: "Valery D.",
  username: "valerydremov",
  bio: "Founder of this place",
  verified: true,
  followersCount: 36,
  isFollowedByCurrentUser: false,
  followers: [
    {
      id: 24,
      name: "Ripledd",
      followersCount: 24,
      bio: "You're Fantastic!",
      username: "ripledd",
      avatar:
        "https://ripledd.com/profile/avatar/e12cc2c46dd45dd31f67bd45b0f2b816972886107075.jpeg",
    },
    {
      id: 25,
      name: "Aditya",
      followersCount: 24,
      bio: "You're Fantastic!",
      username: "foxy4096",
      avatar:
        "https://ripledd.com/profile/avatar/b793dcb3a5c7ec67d0200d910eb3c017058564617055.jpeg",
    },
    {
      id: 26,
      name: "Nathen",
      followersCount: 24,
      bio: "You're Fantastic!",
      username: "nyxianonroids",
      avatar:
        "https://ripledd.com/profile/avatar/6ad18075b252aa124cb903e78f066417041293356668.jpeg",
    },
    {
      id: 27,
      name: "4our",
      followersCount: 24,
      bio: "You're Fantastic!",
      username: "4our",
      avatar:
        "https://ripledd.com/profile/avatar/446c0b3b98e6f7fa3e1248a710d58916977864218967.jpeg",
    },
  ],
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
      <Image
        src={tuser.headerImage}
        w={700}
        borderTopRadius={"inherit"}
        aspectRatio={"16/5"}
        fallbackSrc={defaultBannerImage}
        backgroundSize={"auto"}
      />
      <CardBody padding={"10px"}>
        <Wrap>
          <Avatar
            mt={"-7"}
            boxSize={"80px"}
            name={tuser.name}
            borderRadius={"10px"}
            bg={"black"}
            textColor={"white"}
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
                tuser.followersCount--;
              }}
            >
              Following
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              rightIcon={<FaUserPlus />}
              _dark={{ color: "black" }}
              bgGradient={"linear(to-r, green.400, blue.500)"}
              _hover={{
                bgGradient: "linear(to-r, green.500, blue.600)",
              }}
              onClick={() => {
                setIsFollowedByCurrentUser(true);
                tuser.followersCount++;
              }}
            >
              Follow
            </Button>
          )}
          <FollowerModal tuser={tuser} />
        </Wrap>
      </CardBody>
    </Card>
  );
}
