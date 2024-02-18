import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Textarea,
  Wrap,
} from "@chakra-ui/react";
const getUserChannels = (username) => {
  return [
    { id: 1, username: username, avatar: `https://github.com/${username}.png` },
    { id: 2, username: "django", avatar: "https://github.com/django.png" },
    {
      id: 3,
      username: "htmx",
      avatar: "https://github.com/bigskysoftware.png",
    },
    { id: 4, username: "react", avatar: "https://github.com/react.png" },
  ];
};

import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineCameraAlt,
  MdOutlineClear,
  MdOutlinePostAdd,
} from "react-icons/md";
import PostCreateDescription from "../components/PostCreateDescription";
import { BsMarkdownFill } from "react-icons/bs";

function CreatePost() {
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setMediaURL(URL.createObjectURL(file));
  };

  const [selectedChannel, setSelectedChannel] = useState(
    getUserChannels("foxy4096")[0]
  );
  const [mediaURL, setMediaURL] = useState("");
  let mediaInput = null;

  return (
    <>
      <Card mx={[0, 0, 0, 60]} mt={[0, 0, 0, 6]}>
        <CardHeader>
          <Heading>Create Post</Heading>
        </CardHeader>
        <FormControl>
          <CardBody>
            <Wrap>
              <div>
                <FormLabel>Channel</FormLabel>
                <Menu>
                  <MenuButton
                    mb={2}
                    as={Button}
                    variant={"outline"}
                    leftIcon={
                      <Avatar
                        src={selectedChannel?.avatar}
                        name={selectedChannel?.username}
                        size={"xs"}
                      />
                    }
                    rightIcon={<MdKeyboardArrowDown />}
                  >
                    {selectedChannel ? (
                      <Text px={1} isTruncated color="blue.300">
                        @{selectedChannel.username}
                      </Text>
                    ) : (
                      <>Select Channel</>
                    )}
                  </MenuButton>
                  <MenuList py={"6px"}>
                    {getUserChannels("foxy4096").map((channel) => (
                      <div key={channel.id}>
                        <MenuItem
                          key={channel.id}
                          onClick={() => setSelectedChannel(channel)}
                          borderLeft={
                            !!selectedChannel &&
                            selectedChannel?.id === channel.id &&
                            "2px solid gray"
                          }
                        >
                          <Avatar
                            src={channel.avatar}
                            name={channel.username}
                            size={"sm"}
                          />
                          <span>
                            <Text
                              px={2}
                              color="blue.300"
                              fontWeight={"semibold"}
                            >
                              @{channel.username}
                            </Text>
                          </span>
                        </MenuItem>
                        <MenuDivider />
                      </div>
                    ))}
                  </MenuList>
                </Menu>
              </div>
              <PostCreateDescription />
            </Wrap>
            <FormLabel>Content</FormLabel>
            <Textarea
              placeholder="Add text, urls, #keywords and @channels"
              rows={6}
            />
            <Text fontSize={"sm"} mt={2}>
              <Wrap align={"center"}>
                <Link
                  href="https://www.markdownguide.org/cheat-sheet"
                  isExternal
                >
                  Markdown is supported
                </Link>
                <BsMarkdownFill />
              </Wrap>
            </Text>
            {mediaURL && (
              <>
                <Image
                  borderRadius={"10px"}
                  src={mediaURL}
                  boxSize={"180px"}
                  objectFit={"cover"}
                  w={"180"}
                  border={"1px solid #232323"}
                  my={2}
                />
                <Button
                  variant={"ghost"}
                  colorScheme="red"
                  rightIcon={<MdOutlineClear />}
                  size={"sm"}
                  onClick={() => setMediaURL("")}
                >
                  Remove
                </Button>
              </>
            )}
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button
                leftIcon={<MdOutlinePostAdd />}
                _dark={{ color: "black" }}
                bgGradient={"linear(to-r, pink.400, red.400)"}
                _hover={{
                  bgGradient: "linear(to-r, pink.500, red.500)",
                  boxShadow: "0px 0px 50px 1px #F56565",
                  transform: "translate(0, -3px)",
                }}
              >
                Publish
              </Button>
              <Button
                leftIcon={<MdOutlineCameraAlt />}
                variant={"outline"}
                onClick={() => mediaInput.click()}
              >
                Add Media
              </Button>
              <input
                type="file"
                name="media"
                hidden
                ref={(el) => (mediaInput = el)}
                onChange={onImageChange}
              />
            </ButtonGroup>
          </CardFooter>
        </FormControl>
      </Card>
    </>
  );
}

export default CreatePost;
