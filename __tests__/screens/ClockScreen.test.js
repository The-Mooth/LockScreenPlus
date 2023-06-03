import ClockScreen from "../../src/screens/ClockScreen";
import { render, waitFor, fireEvent } from "@testing-library/react-native";

test("renders correctly", async () => {
    const { getByTestId } = render(<ClockScreen/>);
  
    await waitFor(
      () => {
        const component = getByTestId("mainView");
        expect(component).not.toBeNull();
      },
      { timeout: 6000 }
    );
  });

  test("renders bottomView", async () => {
    const { getByTestId } = render(<ClockScreen/>);
  
    await waitFor(
      () => {
        const component = getByTestId("bottomDisplay");
        expect(component).not.toBeNull();
      },
      { timeout: 6000 }
    );
  });

  test("refresh works", async () => {
    const { getByTestId } = render(<ClockScreen/>);
  
    await waitFor(
      () => {
        const component = getByTestId("refreshButton");
        expect(component).not.toBeNull();
      },
      { timeout: 6000 }
    );
  });

    test("refresh button is clickable", async () => {
        const { getByTestId } = render(<ClockScreen/>);
  
    await waitFor(
      () => {
        const component = getByTestId("refreshButton");
        fireEvent.press(component);
        expect(component).not.toBeNull();
      },
      { timeout: 6000 }
    );
  });
