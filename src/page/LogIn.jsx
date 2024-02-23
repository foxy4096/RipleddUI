import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import ripleddMobileLogoLight from "../asset/ripledd_logo_light_mobile.png";
import ripleddMobileLogoDark from "../asset/ripledd_logo_dark_mobile.png";
import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  return (
    <>
      <Card rounded={"none"} h={["100vh"]}>
        <CardHeader>
          <Center>
            <Image
              src={ripleddMobileLogoLight}
              w={10}
              _dark={{ display: "none" }}
              objectFit="contain"
              alt="Ripledd Logo"
            />
            <Image
              src={ripleddMobileLogoDark}
              _light={{ display: "none" }}
              w={10}
              objectFit="contain"
              alt="Ripledd Logo"
            />
          </Center>
          <Center>
            <Heading size={"lg"}>Welcome back</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Container>
            <InputGroup mb={3}>
              <InputLeftElement>
                <MdEmail />
              </InputLeftElement>
              <Input type="email" placeholder="Email Address" />
            </InputGroup>
            <InputGroup mb={3}>
              <InputLeftElement>
                <MdLock />
              </InputLeftElement>
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <Button
              w={"100%"}
              bg={"#4299E1"}
              shadow={"xl"}
              size={"lg"}
              color={"white"}
              _hover={{ bg: "#3182CE" }}
              borderBottom={"5px #2B6CB0 solid"}
              _active={{
                borderBottom: "none",
              }}
            >
              Log In
            </Button>
            <Box position="relative" padding="8">
              <Divider />
              <AbsoluteCenter px="4" _dark={{ bg: "black" }} bg={"white"}>
                Sign Up with Socials
              </AbsoluteCenter>
            </Box>
            <Button
              size={"lg"}
              variant={"outline"}
              colorScheme="blue"
              leftIcon={<FcGoogle />}
              w={"100%"}
            >
              Login With Google
            </Button>
          </Container>
        </CardBody>
      </Card>
    </>
  );
};

export default LogIn;
