import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { cardTheme } from "./components/CardTheme";
import { menuTheme } from "./components/menuTheme";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
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
      Card: cardTheme,
      Menu: menuTheme,
    },
  },
  withProse()
);

export default theme;
