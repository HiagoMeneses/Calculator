import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title calculator", () => {
  render(<App />);
  const titleElement = screen.getByText(/Calculadora/i);
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toMatchSnapshot();
});
