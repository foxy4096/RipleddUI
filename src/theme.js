import { extendTheme, createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { cardAnatomy } from "@chakra-ui/anatomy";
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle((prop) => ({
  container: {
    backgroundColor: mode("#e7e7e7", "#0A0A0A")(prop),
  },
  header: {
    paddingBottom: "2px",
  },
  body: {
    paddingTop: "2px",
  },
  footer: {
    paddingTop: "2px",
  },
}));

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: mode("white", "black")(props),
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
    }),
  },
  components: {
    Card: defineMultiStyleConfig({ baseStyle }),
  },
});

export default theme;
