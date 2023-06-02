import React from "react";
import ClockScreen from "./screens/ClockScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./context/Themes";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ClockScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
