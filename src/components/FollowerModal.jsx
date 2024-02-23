/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  List,
  ListItem,
  Avatar,
  Wrap,
  Divider,
  Heading,
  Text,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function FollowerModal({ tuser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<FaUser />} onClick={onOpen} variant={"outline"}>
        {tuser?.followersCount}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader>Followers</ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody mt={3}>
            <List spacing={4}>
              {tuser && tuser?.followers?.map((follower) => (
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
                          <MdVerified/>
                        </Wrap>
                      </Heading>
                      <Text color={"blue.300"} fontSize={"sm"}>
                        @{follower.username}
                      </Text>
                    </div>
                    <Spacer />
                    <Button justifySelf={"flex-end"}>Visit</Button>
                  </Wrap>
                  <Divider mt={2} />
                </ListItem>
              ))}
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
