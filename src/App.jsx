/* eslint-disable react/prop-types */
import TrendingCard from "./components/TrendingCard";
import PostBlock from "./components/PostBlock";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import MiniUserCard from "./components/MiniUserCard";

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
      "https://ripledd.com/posters/535bf2a7d203b7ebc24fd67471560817056890202182.jpeg",
    lits: 5,
    views: 42,
    comments: 4,
    reposts: 7,
    user: {
      name: "Valery D.",
      username: "valerydremov",
      avatar:
        "https://ripledd.com/profile/avatar/19971ad92b7ba4c3d12a34754ee49217029141809532.jpeg",
    },
    hasUserLikes: true,
    hasUserReposted: true,
  },
  {
    id: 2,
    content: "## Meme Go Burr \n > Block Quotes \n \n![Goofy Image](https://preview.redd.it/hey-ive-seen-this-one-before-v0-9f786u1dxtdc1.jpeg?width=1080&crop=smart&auto=webp&s=e72f607026afa5bebfe4ddd4c5b5143dfe50fa76)",
    lits: 5,
    views: 42,
    comments: 4,
    reposts: 7,
    user: {
      name: "Valery D.",
      username: "valerydremov",
      avatar:
        "https://ripledd.com/profile/avatar/19971ad92b7ba4c3d12a34754ee49217029141809532.jpeg",
    },
    hasUserLikes: true,
    hasUserReposted: true,
  },
];

function App({ user }) {
  return (
    <div>
      <TrendingCard />
      <Flex wrap={"wrap-reverse"} px={[0, 0, 20, 20, "16em"]} columnGap={6}>
        <Box flex={8} mt={0}>
          {posts.map((post) => (
            <PostBlock post={post} key={post.id} />
          ))}
        </Box>
        <Box flex={4} mb={0}>
          <MiniUserCard user={user} />
        </Box>
      </Flex>
      <Center>
        <Box
          rounded="lg"
          bgGradient={"linear(to-r, #fd4ba4, #9a87f4, #67c8ff, #7dffc1)"}
          px={["10", "20"]}
          m={6}
          py="6"
          fontWeight={"semibold"}
        >
          <Flex gap={6} alignItems={"center"} wrap={"wrap"}>
            Sign In to follow @foxy4096, save content, create new channels, grow
            own community and much more!
            <Button
              variant={"solid"}
              color={"black"}
              fontWeight={"bold"}
              _hover={{
                bg: "gray.200",
              }}
              bg={"white"}
            >
              Sign In
            </Button>
          </Flex>
        </Box>
      </Center>
    </div>
  );
}

export default App;
