import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resList from "../../utils/mockData";
import "@testing-library/jest-dom";

it("Should render Restaurant component with props Data", () => {
  render(<RestaurantCard resData={resList} />);
  const name = screen.getByText("Adil Hotel");
  expect(name).toBeInDocument();
});
