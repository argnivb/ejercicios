import { Button, MantineColorsTuple, createTheme } from "@mantine/core";

const brandColor: MantineColorsTuple = [
  "#fff8e4",
  "#feefcf",
  "#fbdda0",
  "#f8ca6c",
  "#f5ba43",
  "#f4b027",
  "#f4aa18",
  "#d6930a",
  "#c18400",
  "#a87100",
];
const redColor: MantineColorsTuple = [
  "#ffeaea",
  "#fbd3d3",
  "#f5a4a4",
  "#f07272",
  "#ed4947",
  "#ea302d",
  "#ea231f",
  "#d11713",
  "#C21010",
  "#a30109",
];

export const theme = createTheme({
  fontFamily: "Roboto, Helvetica, Arial,sans-serif;",
  primaryColor: "brand",
  colors: {
    brand: brandColor,
    red: redColor,
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "brand.7",
      },
    }),
  },
});
