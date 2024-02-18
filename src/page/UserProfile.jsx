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
import { MdOutlineCheck, MdVerified } from "react-icons/md";
import FollowerModal from "../components/FollowerModal";
import { useState } from "react";
import 'animate.css';


const tuser = {
  name: "Aditya Priyadarshi",
  username: "foxy4096",
  bio: "A Dumb Web Developer Who Loves Django",
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
        "https://pbs.twimg.com/profile_images/1738917068618031104/ykDYa_zM_400x400.jpg",
    },
    {
      id: 25,
      name: "Aditya",
      followersCount: 24,
      bio: "You're Fantastic!",
      username: "foxy4096",
      avatar: "https://github.com/foxy4096.png",
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
    "https://pbs.twimg.com/profile_banners/1356851094157070339/1707826513",
  avatar: "https://github.com/foxy4096.png",
};

const UserProfile = () => {
  const [isFollowedByCurrentUser, setIsFollowedByCurrentUser] = useState(
    tuser.isFollowedByCurrentUser
  );
  return (
    <Card
      height={"min-content"}
      borderRadius={[0, 0, 10, 10]}
      __css={{ backgroundColor: "transperant" }}
      mb={[0, 0, 10, 10]}
      boxShadow={[
        "none",
        "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      ]}
    >
      <Image
        src={tuser.headerImage}
        w={"100%"}
        aspectRatio={"16/5"}
        fallbackSrc={defaultBannerImage}
        backgroundSize={"auto"}
        top={0}
        objectFit={"cover"}
        bgAttachment={"fixed"}
        h={"20em"}
      />
      <CardBody p={"10px"} px={["6px", "3em", "12rem"]}>
        <Avatar
          mt={"-12"}
          size={"2xl"}
          boxSize={"4em"}
          borderRadius={"10px"}
          name={tuser.name}
          mb={"6px"}
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
              <MdVerified />
            </Wrap>
          </Heading>
          <Text color={"blue.300"}>@{tuser.username}</Text>
        </div>
        <Text fontSize={"sm"}>{tuser.bio}</Text>
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
              className="animate__bounce"
              rightIcon={<FaUserPlus />}
              _dark={{ color: "black" }}
              bgGradient={"linear(to-r, green.400, blue.500)"}
              _hover={{
                bgGradient: "linear(to-r, green.500, blue.600)",
                boxShadow: "0px 0px 50px 1px #2B6CB0",
                transform: "translate(0, -3px)",
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
};

export default UserProfile;
