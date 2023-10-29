import React from "react";
import { render } from "@testing-library/react";
import Tentang from "./Tentang";

describe("Tentang component", () => {
   test("renders without errors", () => {
      render(<Tentang />);
   });

   test("contains the welcome message", () => {
      const { getByText } = render(<Tentang />);
      const welcomeMessage = getByText("Selamat datang di aplikasi Saya!");

      expect(welcomeMessage).toBeInTheDocument();
   });
});
