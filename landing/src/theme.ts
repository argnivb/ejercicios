import {
  Button,
  Container,
  MantineColorsTuple,
  createTheme,
  rem,
} from "@mantine/core";

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
  "#fefaf2",
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

const CONTAINER_SIZES: Record<string, string> = {
  xs: rem(572),
  sm: rem(720),
  md: rem(960),
  lg: rem(1140),
  xl: rem(1320),
  xxl: rem(1445),
};

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
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
});
