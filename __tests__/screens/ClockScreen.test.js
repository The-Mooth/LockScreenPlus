import ClockScreen from "../../src/screens/ClockScreen";
import { render, waitFor, fireEvent } from "@testing-library/react-native";

test("renders correctly", async () => {
  const { getByTestId } = render(<ClockScreen/>);

  await waitFor(
    () => {
      const component = getByTestId("mainView");
      expect(component).not.toBeNull();
      done();
    },
    { timeout: 1000 }
  );
});

test("renders correctly", async () => {
  const { getByTestId } = render(<ClockScreen/>);

  await waitFor(
    () => {
      const component = getByTestId("bottomDisplay");
      expect(component).not.toBeNull();
    },
    { timeout: 1000 }
  );
});

/*
test("refresh button works", async () => {
  const { getByTestId } = render(<ClockScreen />);

  await waitFor(
    () => {
      const component = getByTestId("refreshButton");
      expect(component).not.toBeNull();
    },
    { timeout: 600 }
  );
});
*/