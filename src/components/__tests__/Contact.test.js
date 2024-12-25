import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// if there are multiple test cases then we can group all of them using describe , and we can create multiple describe also aand also we can create nested describe also

describe("Contact Us page Test Cases", () => {
  // we can also write it in the place of test. "it" is an alias of test. We can write it also.
  it("Contact component should render correctly", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Contact component should render correctly", () => {
    render(<Contact />);
    const button = screen.getByText("Send");
    expect(button).toBeInTheDocument();
  });

  it("There should be email box", () => {
    render(<Contact />);
    const email = screen.getByPlaceholderText("email");
    expect(email).toBeInTheDocument();
  });

  test("Should load 2 input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});
