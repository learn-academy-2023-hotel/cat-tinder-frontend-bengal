import { render, screen } from "@testing-library/react";
import CatEdit from "../pages/CatEdit";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockCats from "../mockCats";

const renderEdit = () => {
  render(
    <MemoryRouter initialEntries={["/catedit/1"]}>
      <Routes>
        <Route
          path="/catedit/:id"
          element={<CatEdit cats={mockCats} />}
        ></Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("<CatEdit />", () => {
  it("renders without crashing", () => {
    renderEdit();
    screen.logTestingPlaygroundURL();
  });

  it("renders name input in form", () => {
    renderEdit();
    const name = screen.getByRole("textbox", { name: /name/i });
    expect(name).toBeInTheDocument();
  });
});
