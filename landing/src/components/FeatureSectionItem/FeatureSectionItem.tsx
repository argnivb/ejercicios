import { BackgroundImage, Box, Center, Text } from "@mantine/core";
import classes from "./FeatureSectionItem.module.css";

export const FeatureSectionItem = ({
  text,
  bgUrl,
}: {
  text: string;
  bgUrl: string;
}) => {
  return (
    <Box className={classes.wrapper} component="a" href="#">
      <BackgroundImage src={bgUrl} className={classes.item}>
        <Center w="100%" h="100%">
          <Text className={classes.text}>{text}</Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
};
