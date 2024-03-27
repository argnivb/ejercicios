import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";
import { FeatureSection } from "./components/FeatureSection";
import { DesignSection } from "./components/DesignSection";
import { ShowroomSection } from "./components/ShowroomSection";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Container py="xl">
        <FeatureSection />
      </Container>
      <Container py="xl" size="xl">
        <DesignSection />
      </Container>
      <Container py="xl" size="xl">
        <ShowroomSection />
      </Container>
    </MantineProvider>
  );
}

export default App;
