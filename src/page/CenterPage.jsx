/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CenterPageNavbar from "../components/CenterPageNavbar";
import { MdSearch } from "react-icons/md";
import { motion } from "framer-motion";
import PostBlock from "../components/PostBlock";

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
    content: "### Meme Go Burr \n > Block Quotes",
    lits: 5,
    views: 42,
    imageUrl:
      "https://images.pexels.com/photos/20150823/pexels-photo-20150823/free-photo-of-young-businessmen-kyoto-japan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
const CenterPage = ({ user, setUser }) => {
  return (
    <div>
      <CenterPageNavbar user={user} setUser={setUser} />
      <Box background={"#866DFF"} px={[10, 100]} w={"100%"}>
        <Flex wrap={"wrap"} alignItems={"center"} mb={15}>
          <Box mt={10} flex={8} mb={8}>
            <Text
              as={"div"}
              color={"white"}
              textShadow={"-3px 7px black"}
              sx={{
                WebkitTextStroke: "2px black",
              }}
            >
              <Heading
                pl={1}
                sx={{
                  WebkitTextStroke: "1px black",
                  textShadow: "-1px 3px #000000",
                }}
                mb={[0, -3]}
                hideBelow={"md"}
                fontFamily={"arial"}
                fontSize={["30px", "40px"]}
              >
                New Way To Blogggg!
              </Heading>
              <Heading
                fontFamily={"arial"}
                fontWeight={"900"}
                lineHeight={0.98}
                mb={2}
                fontSize={["40px", "85px"]}
              >
                Discover,
                <br /> Create,
                <br /> Grow...
              </Heading>
              <Heading
                sx={{
                  WebkitTextStroke: "1px black",
                  textShadow: "-1px 3px #000000",
                }}
                lineHeight={0.98}
                fontFamily={"arial"}
                fontSize={"40px"}
                hideBelow={"md"}
              >
                Grow Your Channels 🔥
              </Heading>
            </Text>
          </Box>
          <Box flex={4}>
            <Button
              as={motion.div}
              fontWeight={"800"}
              size={"lg"}
              color={"black"}
              bg={"white"}
              _hover={{
                filter: "brightness(90%)",
              }}
              _active={{
                filter: "brightness(80%)",
              }}
              fontSize={["15px", "35px"]}
              boxShadow={"0px 3px 0px 5px #000000"}
              w={["100%", "100%", "100%", "400px"]}
              h={["40px", "80px"]}
            >
              Join This World!
            </Button>
          </Box>
        </Flex>
        <InputGroup size={"lg"} pb={"10em"}>
          <InputLeftElement>
            <MdSearch color="#866DFF" />
          </InputLeftElement>
          <Input
            fontWeight={"900"}
            variant={"filled"}
            background={"#937dff"}
            _focus={{
              bg: "white",
              borderColor: "#fff !important",
              color: "black",
              boxShadow: "0px 3px 0px 5px #000000",
              outline: "none",
              _placeholder: { color: "#866DFF" },
            }}
            _hover={{
              bg: "white",
              color: "black",
              outline: "none",
              _placeholder: { color: "#866DFF" },
              boxShadow: "0px 3px 0px 5px #000000",
            }}
            placeholder="Search for content & channels..."
          />
        </InputGroup>
      </Box>
      <SimpleGrid
        columns={[1, 1, 1, 3]}
        zIndex={20}
        mt={"-8em"}
        spacing={2}
        px={[0, 2]}
      >
        <PostBlock post={posts[0]} />
        <PostBlock post={posts[1]} />
        <PostBlock post={posts[2]} />
      </SimpleGrid>
    </div>
  );
};

export default CenterPage;
