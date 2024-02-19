/* eslint-disable react/prop-types */
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import CenterPageNavbar from "../components/CenterPageNavbar";

const CenterPage = ({ user, setUser }) => {
  return (
    <div style={{background: "#866DFF", height: '100vh'}}>
      <Box background={"#866DFF"} w={'100%'}>
        <CenterPageNavbar user={user} setUser={setUser} />
        <Flex ml={"25px"} alignItems={"center"} gap={"12em"} w={"95%"}>
          <Text
            color={"white"}
            textShadow={"-3px 7px black"}
            textAlign={"left"}
            sx={{
              WebkitTextStroke: "2px black",
            }}
          >
            <Heading
              sx={{
                WebkitTextStroke: "1px black",
                textShadow: "-1px 3px #000000",
              }}
              mb={-3}
              fontFamily={"arial"}
              fontSize={"40px"}
            >
              New Way To Blogggg!
            </Heading>
            <Heading
              fontFamily={"arial"}
              fontWeight={"900"}
              lineHeight={0.98}
              fontSize={"85px"}
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
            >
              Grow Your Channels 🔥
            </Heading>
          </Text>
          <Button
            fontWeight={"800"}
            size={"lg"}
            color={"black"}
            fontSize={"35px"}
            boxShadow={"0px 3px 0px 5px #000000"}
            w={"390px"}
            h={"60px"}
          >
            Join This World!
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default CenterPage;
