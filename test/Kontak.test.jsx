import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Kontak from "./Kontak";

describe("Kontak component", () => {
   test("renders without errors", () => {
      render(<Kontak />);
   });

   test("calls handleSubmitMessage when form is submitted", () => {
      const { getByLabelText, getByText } = render(<Kontak />);
      const nameInput = getByLabelText("Name:");
      const emailInput = getByLabelText("Email:");
      const messageInput = getByLabelText("Message:");
      const submitButton = getByText("Submit");

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
      fireEvent.change(messageInput, { target: { value: "Hello, world!" } });
      fireEvent.click(submitButton);

      expect(console.log).toHaveBeenCalledWith(
         "Pesan yang dikirim ke server:\nName: John Doe\nEmail: john.doe@example.com\nMessage: Hello, world!"
      );
   });
});
