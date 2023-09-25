import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      700: "#0D0D0D",
      600: "#1A1A1A",
      500: "#262626",
      400: "#333333",
      300: "#808080",
      200: "#D9D9D9",
      100: "#F2F2F2",
    },
    white: {
      200: "rgba(255, 255, 255, 0.02)",
    },
    "blue-dark": "#1E6F9F",
    "custom-blue": "#4EA8DE",
    "purple-dark": "#5E60CE",
    "custom-purple": "#8284FA"
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  styles: {
    global: {
      body: {
        bg: "gray.600",
        color: "gray.50",
      },
    },
  },
});
