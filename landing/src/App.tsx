import { MantineProvider, Text } from "@mantine/core";
import { theme } from "./theme";

import "@mantine/core/styles.css";
import "./App.css";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Text>hola</Text>
    </MantineProvider>
  );
}

export default App;
