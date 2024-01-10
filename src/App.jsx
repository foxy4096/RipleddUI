import TrendingCard from "./components/TrendingCard";
import PostBlock from "./components/PostBlock";
import { Box, Flex } from "@chakra-ui/react";
import MiniUserCard from "./components/MiniUserCard";

function App() {
  return (
    <div>
      <TrendingCard />
      <Flex wrap={"wrap-reverse"} px={[0, 0,20, 20, "16em"]} columnGap={6}>
        <Box flex={8} mt={0}>
          <PostBlock />
        </Box>
        <Box flex={4} mb={0}>
          <MiniUserCard />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
