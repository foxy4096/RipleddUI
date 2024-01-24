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
import PostCreateDescription from "./components/PostCreateDescription";

function CreatePost() {
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setMediaURL(URL.createObjectURL(file));
  };

//   const onTextAreaBlur = (e) => {
//     // Parse all the links from the textarea

//     const links = e.target.value.match(/(https?:\/\/[^\s]+)/g);

//     if (links) {
//       const apiUrl = `https://jsonlink.io/api/extract?url=${links[0]}&api_key=${apiKey}`;
//       fetch(apiUrl)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           setEmbed(data);
//         })
//         .catch((error) => {
//           console.error("An error occurred:", error);
//         });
//     }
//   };

  const [selectedChannel, setSelectedChannel] = useState(null);
  const [mediaURL, setMediaURL] = useState("");
  let mediaInput = null;

//   const [embed, setEmbed] = useState(null);

  return (
    <Card borderRadius={[0, 0, 10]} mb={["0", "3"]}>
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
                <MenuList border={"1px solid #232323"} py={"6px"}>
                  {getUserChannels("foxy4096").map((channel) => (
                    <div key={channel.id}>
                      <MenuItem
                        key={channel.id}
                        onClick={() => setSelectedChannel(channel)}
                        borderLeft={
                          !!selectedChannel &&
                          selectedChannel?.id === channel.id &&
                          "2px solid white"
                        }
                      >
                        <Avatar
                          src={channel.avatar}
                          name={channel.username}
                          size={"sm"}
                        />
                        <span>
                          <Text px={2} color="blue.300" fontWeight={"semibold"}>
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
            // onBlur={onTextAreaBlur}
          />
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
            <Button leftIcon={<MdOutlinePostAdd />}>Publish</Button>
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
  );
}

export default CreatePost;
