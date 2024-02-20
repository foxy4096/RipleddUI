/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import PostBlock from "../components/PostBlock";
import UserCard from "../components/UserCard";
import SideBlock from "../components/SideBlock";

let posts = [
  {
    id: 1,
    content: "**Very Cool Desert Scene 🏜**",
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
  },
  {
    id: 2,
    content:
      " - Making sure everything looks as cinematic as possible!\n -  Each frame must be a piece of art, the image must dominate no matter which frame it is.\n#cinematiclook",
    imageUrl:
      "https://images.pexels.com/photos/18118946/pexels-photo-18118946/free-photo-of-colibri.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    lits: 5,
    views: 42,
    comments: 4,
    reposts: 7,
    user: {
      name: "Valery D.",
      username: "valerydremov",
      avatar:
        "https://pbs.twimg.com/profile_images/1738917068618031104/ykDYa_zM_400x400.jpg",
    },
    hasUserLikes: true,
    hasUserReposted: true,
  },
  {
    id: 3,
    content:
      "## Meme Go Burr \n > Block Quotes \n \n![Goofy Image](https://preview.redd.it/hey-ive-seen-this-one-before-v0-9f786u1dxtdc1.jpeg?width=1080&crop=smart&auto=webp&s=e72f607026afa5bebfe4ddd4c5b5143dfe50fa76)",
    lits: 5,
    views: 42,
    comments: 4,
    reposts: 7,
    user: {
      name: "Valery D.",
      username: "valerydremov",
      avatar:
        "https://pbs.twimg.com/profile_images/1738917068618031104/ykDYa_zM_400x400.jpg",
    },
    hasUserLikes: true,
    hasUserReposted: true,
  },
];
const UserProfile = ({ tuser }) => {
  const [isFollowedByCurrentUser, setIsFollowedByCurrentUser] = useState(
    tuser?.isFollowedByCurrentUser
  );
  return (
    <>
      <Flex wrap={"wrap"} px={[0, 10, 30, 20, "8em"]} mt={[0, 6]} columnGap={4}>
        <Box flex={[6, 8]}>
          <UserCard
            tuser={tuser}
            setIsFollowedByCurrentUser={setIsFollowedByCurrentUser}
            isFollowedByCurrentUser={isFollowedByCurrentUser}
          />
          {posts.map((post) => (
            <PostBlock post={post} key={post.id} />
          ))}
        </Box>
        <Box hideBelow={"lg"} flex={[6, 4]}>
          <SideBlock tuser={tuser} />
        </Box>
      </Flex>
    </>
  );
};

export default UserProfile;
