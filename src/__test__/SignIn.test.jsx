import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignIn from "../Pages/Auth/SignIn";

describe("SignIn Component", () => {
  it("renders without crashing", () => {
    render(<SignIn />);
  });

  it("displays error message when form is submitted without email and password", async () => {
    const { getByText, getByLabelText } = render(<SignIn />);
    const signInButton = getByText("Sign in");
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(getByText("Oh, snapp! Images is Required")).toBeInTheDocument();
      expect(getByText("Oh, snapp! Password is Required")).toBeInTheDocument();
    });
  });

  it("displays error message when password is less than 8 characters", async () => {
    const { getByText, getByLabelText } = render(<SignIn />);
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const signInButton = getByText("Sign in");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "pass" } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(
        getByText("Oh, snapp! Password must be at least 8 characters")
      ).toBeInTheDocument();
    });
  });

  // Add more test cases as needed for other form validations and interactions
});
