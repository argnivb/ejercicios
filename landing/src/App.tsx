import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { FeatureSection } from "./components/FeatureSection";
import { DesignSection } from "./components/DesignSection";
import { ShowroomSection } from "./components/ShowroomSection";
import { FooterLinks } from "./components/FooterLinks";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Container py="xl">
        <FeatureSection />
      </Container>
      <Container py="xl" size="xxl">
        <DesignSection />
      </Container>
      <Container py="xl" size="xxl">
        <ShowroomSection />
      </Container>
      <FooterLinks />
    </MantineProvider>
  );
}

export default App;
