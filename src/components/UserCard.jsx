/* eslint-disable react/prop-types */
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
import FollowerModal from "./FollowerModal";

export default function UserCard({
  tuser,
  isFollowedByCurrentUser,
  setIsFollowedByCurrentUser,
  avatarSize,
}) {
  return (
    <Card
      height={"min-content"}
      borderRadius={[0, 10, 10, 10, 10]}
      mb={[0, 3]}
      boxShadow={[
        "none",
        "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      ]}
    >
      <Image
        src={tuser.headerImage}
        w={"100%"}
        borderTopRadius={"inherit"}
        aspectRatio={"16/5"}
        fallbackSrc={defaultBannerImage}
        backgroundSize={"auto"}
      />
      <CardBody padding={"10px"}>
        <Avatar
          mt={-16}
          mb={3}
          name={tuser.name}
          bg={"black"}
          textColor={"white"}
          src={tuser.avatar}
          size={avatarSize || "2xl"}
          border={"5px white solid"}
          _dark={{
            border: "5px #070707 solid",
          }}
        ></Avatar>
        <div>
          <Heading size={["sm", "md"]}>
            <Wrap>
              {tuser.name}
              <MdVerified />
            </Wrap>
          </Heading>
          <Text color={"blue.300"}>@{tuser.username}</Text>
        </div>
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
                boxShadow: "0px 0px 50px 1px #4299E1",
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
}
