import { Avatar, Box, Center, Flex, Image, Text } from "@chakra-ui/react";
export default function TrendingCard() {
  const images = [
    {
      id: 1,
      imageUrl:
        "https://ripledd.com/posters/14c7d22e6bf590a925f53b7af27d9a16850204889184.jpeg",
      lits: 5,
      views: 42,
      user: {
        name: "Aditya Priyadarshi",
        avatar: "https://avatars.githubusercontent.com/u/54215788?v=4",
      },
    },
    {
      id: 2,
      imageUrl:
        "https://ripledd.com/posters/7f3ebfc27b917fce74e8b4686b0dfa16629608682578.jpeg",
      lits: 5,
      views: 42,
      user: {
        name: "Valery",
        avatar:
          "https://ripledd.com/profile/avatar/19971ad92b7ba4c3d12a34754ee49217029141809532.jpeg",
      },
    },
    {
      id: 3,
      imageUrl:
        "https://ripledd.com/posters/00d88e5f4d80f8d8c86e98c0089a0716732136291513.jpeg",
      lits: 5,
      views: 42,
      user: {
        name: "Cod3vil",
        avatar:
          "https://ripledd.com/profile/avatar/00e18f06cc0469b83bd209f36ea72317044550042913.jpeg",
      },
    },
    {
      id: 4,
      imageUrl:
        "https://ripledd.com/posters/ebfbb7fbb7fb19387ad0d76c43ead317046013178940.jpeg",
      lits: 5,
      views: 42,
      user: {
        name: "SneakPeek",
        avatar:
          "https://ripledd.com/profile/avatar/63b3e25924f3ad499cfbb5bf959da617042101114855.jpeg",
      },
    },
    {
      id: 5,
      imageUrl:
        "https://ripledd.com/posters/bb21cd6bd3069880479a16fcc1714416756267313249.jpeg",
      lits: 5,
      views: 42,
      user: {
        name: "Aal_eey",
        avatar:
          "https://ripledd.com/profile/avatar/28419ecd8d2e5259debf641acc28be17044624915803.jpeg",
      },
    },
  ];
  return (
    <Center mt={20} mb={6} hideBelow={["lg"]}>
      <Flex gap={5}>
        {images.map((image) => (
          <div key={image.id} style={{ position: "relative" }}>
            <Box my={-12} mx={2} zIndex={10} position={"relative"}>
              <Flex gap={2}>
                <Avatar
                  src={image.user.avatar}
                  rounded={"100%"}
                  boxSize={10}
                  position={"relative"}
                  zIndex={10}
                  borderColor={"white"}
                  borderWidth={1}
                />
                <div>
                  <Text fontSize={"xs"}>{image.user.name.slice(0, 12)}...</Text>
                  <Text fontSize={"xx-small"}>
                    Lits: {image.lits} • Views: {image.views}
                  </Text>
                </div>
              </Flex>
            </Box>
            <Image
              src={image.imageUrl}
              rounded={"lg"}
              width={"150px"}
              height={"270px"}
              objectFit={"cover"}
              boxShadow={"0px 0px 2px 0px lightgrey"}
              filter={"auto"}
              brightness={"60%"}
              zIndex={9}
            />
          </div>
        ))}
      </Flex>
    </Center>
  );
}
