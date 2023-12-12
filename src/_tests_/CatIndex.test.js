import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CatIndex from "../pages/CatIndex";

describe("<CatIndex />", () => {
  const renderCatIndex = () => {
    render(
      <BrowserRouter>
        <CatIndex />
      </BrowserRouter>
    );
  }
  it("renders without crashing", () => {
    renderCatIndex()
  });
  it("renders an alt", () => {
      renderCatIndex()
    const logo = screen.queryByTestId('custom-element')
    expect (custom-element).toHaveAttribute("alt", "big cat profile pic")
  });
//   it("has clickable links", () => {
//       renderCatIndex()
//     userEvent.click(screen.getByText("Button"))
//     expect (screen.getByText("Button")).toBeInTheDocument()
//   });
});
