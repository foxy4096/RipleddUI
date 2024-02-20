import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import ripleddMobileLogoLight from "../asset/ripledd_logo_light_mobile.png";
import ripleddMobileLogoDark from "../asset/ripledd_logo_dark_mobile.png";
import { MdEmail, MdLock } from "react-icons/md";

const LogIn = () => {
  return (
    <>
      <Card
        rounded={"none"}
        h={["100vh"]}
      >
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
          <Heading size={'md'}>Welcome back</Heading>
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
              color={"white"}
              _hover={{ bg: "#3182CE" }}
            >
              Log In
            </Button>
          </Container>
        </CardBody>
      </Card>
    </>
  );
};

export default LogIn;
