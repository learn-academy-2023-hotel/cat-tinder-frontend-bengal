import { render } from "@testing-library/react"
import CatShow from "../pages/CatShow"
import { BrowserRouter } from "react-router-dom"

describe("<CatShow />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
              <CatShow />
            </BrowserRouter>)
    })
})