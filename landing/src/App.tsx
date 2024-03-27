import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";
import { FeatureSection } from "./components/FeatureSection";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Container py="xl">
        <FeatureSection />
      </Container>
    </MantineProvider>
  );
}

export default App;
