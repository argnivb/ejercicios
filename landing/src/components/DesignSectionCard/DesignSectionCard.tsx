import {
  Button,
  Card,
  Grid,
  Image,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import classes from "./DesignSectionCard.module.css";

export const DesignSectionCard = ({
  title,
  subTitle,
  description,
  url,
  imageUrl,
}: {
  title: string;
  subTitle: string;
  description: string;
  url: string;
  imageUrl: string;
}) => {
  return (
    <Card shadow="lg" className={classes.wrapper}>
      <Grid gutter="xl" justify="center" align="center">
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Stack gap={rem("6px")}>
            <Title order={2} className={classes.title}>
              {title}
            </Title>
            <Title order={3} className={classes["sub-title"]}>
              {subTitle}
            </Title>
            <Text className={classes.description}>{description}</Text>
            <Button component="a" href={url} w={120}>
              Ver cátalogo
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span="auto">
          <Image src={imageUrl} className={classes.image} />
        </Grid.Col>
      </Grid>
    </Card>
  );
};
