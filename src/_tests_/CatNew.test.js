import { render, screen } from "@testing-library/react";
import CatNew from "../pages/CatNew";
import { BrowserRouter } from "react-router-dom";

describe("<CatNew />", () => {
  const renderCatNew = () => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    );
};
it("renders without crashing", () => {
    renderCatNew();
    screen.logTestingPlaygroundURL();
  });
  it("renders name input in form", () => {
    renderCatNew()
    const name = screen.getByRole('textbox', { name: /name/i })
    expect(name).toBeInTheDocument()
  })
});
