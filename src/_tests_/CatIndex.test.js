import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CatIndex from "../pages/CatIndex";
import mockCats from "/Users/learnacademy/Desktop/cat-tinder-frontend/src/mockCats.js"

describe("<CatIndex />", () => {
  // const renderCatIndex = () => {
    // render(
    //   <BrowserRouter>
    //     <CatIndex mockCats={mockCats} />
    //   </BrowserRouter>
    // );
    
  // }
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CatIndex mockCats={mockCats} />
      </BrowserRouter>
    );
  });
  it("renders an alt", () => {
    render(
      <BrowserRouter>
        <CatIndex mockCats={mockCats} />
      </BrowserRouter>
    );
      // screen.logTestingPlaygroundURL()

      mockCats.forEach(value => {
        const alt = screen.getByText(value.name)
        expect(alt).toBeInTheDocument()
      })
    // const logo = screen.queryByTestId('custom-element')
    // expect (custom-element).toHaveAttribute("alt", "big cat profile pic")
  });
//   it("has clickable links", () => {
//       renderCatIndex()
//     userEvent.click(screen.getByText("Button"))
//     expect (screen.getByText("Button")).toBeInTheDocument()
//   });
});
