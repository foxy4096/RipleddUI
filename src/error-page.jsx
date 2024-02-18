import { Card, Container, CardBody } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";

// eslint-disable-next-line react/prop-types
export default function ErrorPage({user, setUser}) {
  const error = useRouteError();

  return (
    <>
    <Navbar user={user} setUser={setUser}/>
    <Container>
      <Card>
        <CardBody>
          <Prose>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </Prose>
        </CardBody>
      </Card>
    </Container>
    </>
  );
}
