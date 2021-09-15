import { render, screen } from "@testing-library/react";
import { Stepper } from "./stepper";
import { create, act } from "react-test-renderer";

describe("rendering children", () => {
  // it("renders 2 Step", () => {
  //   const { container } = render(<Stepper count={2} />);

  //   const steps = container.querySelectorAll("p");
  //   expect(steps).toHaveLength(2);
  // });

  // it("renders 3 Step", () => {
  //   const { container } = render(<Stepper count={3} />);

  //   const steps = container.querySelectorAll("p");
  //   expect(steps).toHaveLength(3);
  // });

  // it("renders 4 Step", () => {
  //   const { container } = render(<Stepper count={4} />);

  //   const steps = container.querySelectorAll("p");
  //   expect(steps).toHaveLength(4);
  // });

  // it("renders 5 Step", () => {
  //   const { container } = render(<Stepper count={5} />);

  //   const steps = container.querySelectorAll("p");
  //   expect(steps).toHaveLength(5);
  // });

  it("ckeck change", () => {
    const { container } = render(<Stepper count={5} />);

    const steps = container.getElementsByClassName("bublik")[1];
    // console.log(steps);
    act(() => {
      steps.dispatchEvent(new MouseEvent("click"));
    });
    const button = container.getByTestId("bublik-2");
    expect(button).toHaveStyle("background-color: grey");
    expect(steps).toHaveStyle("background-color: grey");
  });
});
