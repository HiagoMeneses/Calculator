import { render, screen } from "@testing-library/react";
import Calculator from "./index";

test("renders buttons calculator", () => {
  render(<Calculator />);
  const buttonElement = screen.getByText(/AC/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toMatchSnapshot();
});
