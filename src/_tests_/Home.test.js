import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("<Home />", () => {
  const renderHome = () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };
  it("renders without crashing", () => {
    renderHome();
  });
  it("checks for the first image tag and all of its props", () => {
    renderHome();
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("id", "1");
    expect(logo).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1623645481161-0d8160281cbf?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    expect(logo).toHaveAttribute("alt", "cat image");
    expect(logo).toHaveAttribute("width", "500");
  });
});

// const div = document.createElement("div");
//     render(<Home />, div);
