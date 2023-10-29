import React from "react";
import { render } from "@testing-library/react";
import Beranda from "./Beranda";

describe("Beranda component", () => {
   test("renders without errors", () => {
      render(<Beranda />);
   });

   test("changes slides every 3 seconds", () => {
      jest.useFakeTimers();

      const { container } = render(<Beranda />);
      const slides = container.querySelectorAll(".slide");

      expect(slides[0]).toHaveClass("active");

      jest.advanceTimersByTime(3000);
      expect(slides[1]).toHaveClass("active");

      jest.advanceTimersByTime(3000);
      expect(slides[2]).toHaveClass("active");

      jest.advanceTimersByTime(3000);
      expect(slides[3]).toHaveClass("active");

      jest.advanceTimersByTime(3000);
      expect(slides[4]).toHaveClass("active");

      jest.advanceTimersByTime(3000);
      expect(slides[5]).toHaveClass("active");

      jest.advanceTimersByTime(3000);
      expect(slides[0]).toHaveClass("active");
   });
});
