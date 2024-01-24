import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { modalAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle({
  dialog: {
    border: "1px solid #DCDCDC",
    _dark: {
      background: "#070707",
      border: "1px solid #232323",
    },
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
});

export const modalTheme = defineMultiStyleConfig({ baseStyle });
