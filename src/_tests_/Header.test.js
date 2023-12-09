import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
  it("renders a logo with a src and alt", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logo = screen.getByRole("img")
    expect (logo).toHaveAttribute("src", "https://images.unsplash.com/photo-1627608221028-63314f261558?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    expect (logo).toHaveAttribute("alt", "Big Cat Tinder logo with outline of cat")
  });
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Meet the cats"))
    expect (screen.getByText("Meet the cats")).toBeInTheDocument()
    userEvent.click(screen.getByText("New account"))
    expect (screen.getByText("New account")).toBeInTheDocument()
    userEvent.click(screen.getByText("New account"))
    expect (screen.getByText("New account")).toBeInTheDocument()
  });
});
