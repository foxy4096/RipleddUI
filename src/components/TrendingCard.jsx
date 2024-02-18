import { Avatar, Box, Center, Flex, Image, Text } from "@chakra-ui/react";


const TrendingCard = () => {
  const images = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/20161587/pexels-photo-20161587/free-photo-of-aerial-view-of-a-farm-with-green-fields.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
        "https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-ashville-appalachian-mountains-north-carolina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
        "https://images.pexels.com/photos/18189590/pexels-photo-18189590/free-photo-of-red-panda-sitting-on-a-cut-tree-trunk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
        "https://images.pexels.com/photos/16802923/pexels-photo-16802923/free-photo-of-staircase-in-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      lits: 5,
      views: 42,
      user: {
        name: "SneakPeek",
        avatar:
          "https://images.pexels.com/users/avatars/405355698/jari-van-de-vel-867.jpeg?auto=compress&fit=crop&h=40&w=40&dpr=1",
      },
    },
    {
      id: 5,
      imageUrl:
        "https://images.pexels.com/photos/17165552/pexels-photo-17165552/free-photo-of-close-up-of-pancakes-with-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
                  borderRadius={"10%"}
                  src={image.user.avatar}
                  name={image.user.name}
                  rounded={"10%"}
                  boxSize={10}
                  position={"relative"}
                  zIndex={10}
                  borderColor={"white"}
                  borderWidth={1}
                />
                <div style={{ color: "white" }}>
                  <Text fontSize={"xs"}>{image.user.name.slice(0, 12)}...</Text>
                  <Text fontSize={"xx-small"}>
                    Lits: {image.lits} • Views: {image.views}
                  </Text>
                </div>
              </Flex>
            </Box>
            <Image
              transition={"all 0.2s ease-in-out"}
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
};

export default TrendingCard;
