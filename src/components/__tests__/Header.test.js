import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Login" });
  // const logInButton = screen.getByText("Login");
  expect(logInButton).toBeInTheDocument();
});

it("Should load Header Component with a cart Option", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart(0)");
  expect(cartItems).toBeInTheDocument();
});

// When we just want to check that if there is cart ignoring 0, 1, 2 etc or not then we use regex
it("Should load Header Component with a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

// check the button like login logout
it("Should change login to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(logInButton);
  const logOutButton = screen.getByRole("button", { name: "Logout" });
  expect(logOutButton).toBeInTheDocument();
});
