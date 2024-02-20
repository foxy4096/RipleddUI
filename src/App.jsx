import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./page/Root";
import UserProfile from "./page/UserProfile";
import ErrorPage from "./error-page";
import { useState } from "react";
import { userTemplate } from "./userTemplate";
import RootLayout from "./components/RootLayout";
import CreatePost from "./page/CreatePost";
import CenterPage from "./page/CenterPage";
import { Progress } from "@chakra-ui/react";
import LogIn from "./page/LogIn";
import SignUp from "./page/SignUp";

function App() {
  const [user, setUser] = useState(userTemplate);
  const [isLoading, setIsLoading] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root user={user} setUser={setUser} />,
      errorElement: <ErrorPage user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <RootLayout user={user} />,
        },

        {
          path: "/user-profile/",
          element: <UserProfile tuser={user}/>,
        },
        {
          path: "/create-post/",
          element: <CreatePost />,
        },
        {path: "/log-in/", element: <LogIn/>},
        {path: "/sign-up/", element: <SignUp/>},
      ],
    },
    {
      path: "/center/",
      element: <CenterPage user={user} setUser={setUser} />,
    },
  ]);
  router.subscribe(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  return (
    <>
      {isLoading && (
        <Progress
          size="xs"
          top={0}
          zIndex={30}
          position={"fixed"}
          left={0}
          right={0}
          isIndeterminate
        />
      )}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
