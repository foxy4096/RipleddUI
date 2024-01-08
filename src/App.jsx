import TrendingCard from "./components/TrendingCard";
import PostBlock from "./components/PostBlock";
import { Box, Flex } from "@chakra-ui/react";
import MiniUserCard from "./components/MiniUserCard";

function App() {
  return (
    <div>
      <TrendingCard />
      <br />
      <Flex wrap={['wrap', 'wrap', 'wrap', 'wrap']} px={[0, 0, 70, 81]} gap={6}>
        <Box flex={8}>
          <PostBlock />
        </Box>
        <Box flex={4}>
          <MiniUserCard />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
