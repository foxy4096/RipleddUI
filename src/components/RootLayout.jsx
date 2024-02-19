import { Box, Button, ButtonGroup, Center, Flex } from "@chakra-ui/react";
import TrendingCard from "../components/TrendingCard";
import PostBlock from "../components/PostBlock";
import SideBlock from "./SideBlock";
import { MdRocketLaunch, MdRssFeed } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { Link } from "react-router-dom";
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
// eslint-disable-next-line react/prop-types
const RootLayout = ({ user }) => {
  return (
    <>
      {!user && <TrendingCard />}
      <Flex wrap={"wrap"} px={[0, 0, 20, 20, "16em"]} columnGap={6}>
        <Box flex={8} mt={0}>
          <Center>
            <ButtonGroup spacing={2} py={3} size={["xs", "sm"]}>
              <Button
                rightIcon={<MdRssFeed />}
                colorScheme="cyan"
                rounded={"full"}
              >
                Subscriptions
              </Button>
              <Button
                colorScheme="yellow"
                rightIcon={<AiOutlineRise />}
                rounded={"full"}
              >
                Now Rising
              </Button>
              <Link to={"/center/"}>
                <Button
                  px={5}
                  rounded={"full"}
                  colorScheme="purple"
                  rightIcon={<MdRocketLaunch />}
                  _light={{
                    _hover: {
                      color: "white",
                    },
                  }}
                  _hover={{
                    color: "white",
                    bgGradient: "linear(to-r, pink.500, blue.600)",
                    boxShadow: "0px 0px 50px 1px #2B6CB0",
                    transform: "translate(0, -3px)",
                  }}
                >
                  Center
                </Button>
              </Link>
            </ButtonGroup>
          </Center>
          {posts.map((post) => (
            <PostBlock post={post} key={post.id} />
          ))}
        </Box>
        <Box flex={4} mt={16}>
          <SideBlock />
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
    </>
  );
};

export default RootLayout;
