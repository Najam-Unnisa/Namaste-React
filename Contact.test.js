import Contact from "./Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

TestEnvironment(" Should load Contact us page",() => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect (heading).toBeInTheDocument();
});