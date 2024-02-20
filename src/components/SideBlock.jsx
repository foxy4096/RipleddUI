/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  List,
  ListItem,
  Spacer,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";

const SideBlock = ({ tuser }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size={"md"}>Channels</Heading>
      </CardHeader>
      <CardBody>
        <List spacing={4}>
          {tuser?.followers.map((follower, idx) => (
            <ListItem key={follower.id}>
              <Wrap gap={3}>
                <Avatar
                  boxSize={"50px"}
                  name={follower.name}
                  bg={"black"}
                  textColor={"white"}
                  src={follower.avatar}
                  border={"3px white solid"}
                  _dark={{
                    border: "3px #070707 solid",
                  }}
                />
                <div>
                  <Heading size={["sm", "md"]}>
                    <Wrap>
                      {follower.name}
                      <MdVerified />
                    </Wrap>
                  </Heading>
                  <Text color={"blue.300"} fontSize={"sm"}>
                    @{follower.username}
                  </Text>
                </div>
                <Spacer />
                <Button justifySelf={"flex-end"} size={'sm'} variant={'outline'}>Visit</Button>
              </Wrap>
              {idx < tuser?.followers.length - 1 && <Divider mt={2} />}
            </ListItem>
          ))}
        </List>
        <Button
          w={"100%"}
          mt={4}
          rounded={"full"}
          colorScheme={"twitter"}
        >
          See More
        </Button>
      </CardBody>
    </Card>
  );
};

export default SideBlock;
