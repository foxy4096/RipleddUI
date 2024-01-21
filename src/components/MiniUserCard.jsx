import {
  Avatar,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const user = {
  name: "Aditya",
  username: "foxy4096",
  verified: true,
  followers: 36,
  joined: "Oct 18, '22",
  headerImage:
    "https://ripledd.com/profile/banner/13067311266f5f954169ffcf8d3ba217013577734898.jpeg",
  avatar: "https://avatars.githubusercontent.com/u/54215788?v=4",
};

export default function MiniUserCard() {
  return (
    <Card
      height={"min-content"}
      borderRadius={[0, 0, 10, 10]}
      boxShadow={[
        "none",
        "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      ]}
    >
      <Image src={user.headerImage} w={700} borderTopRadius={"inherit"} />
      <CardBody>
        <Center mt={[-20, -20, -12, -12, -20]}>
          <Avatar
            size={["xl", "md", "lg", "md", "xl"]}
            border={"3px white solid"}
            name={user.name}
            src={user.avatar}
          />
        </Center>
        <Center>
          <Heading size={["sm", "lg"]}>{user.name}</Heading>
        </Center>
        <Center>
          <Text>@{user.username}</Text>
        </Center>
        <Center>
          <Wrap mt={5} justify={"center"}>
            <Button
              colorScheme="blue"
              _mediaDark={{ backgroundColor: "blue.900" }}
              bgGradient={"linear(to-r, green.400, blue.500)"}
              _hover={{
                bgGradient: "linear(to-r, green.500, blue.600)",
              }}
            >
              Follow
            </Button>
            {/* <Button colorScheme="blue" _mediaDark={{backgroundColor: 'blue.900'}}>Edit</Button> */}
            <Button leftIcon={<FaUser />}>{user.followers}</Button>
          </Wrap>
        </Center>
      </CardBody>
    </Card>
  );
}
