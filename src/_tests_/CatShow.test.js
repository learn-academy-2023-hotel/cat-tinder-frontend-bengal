import { render } from "@testing-library/react";
import CatShow from "../pages/CatShow";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockCats from "../mockCats";

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route
          path="/catshow/:id"
          element={<CatShow cats={mockCats} />}
        ></Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("<CatShow />", () => {
  it("renders without crashing", () => {
    renderShow();
  });
});
