import { render, screen } from "@testing-library/react";
import AlertCard from "../AlertCard";

describe("AlertCard", () => {
  it("renders alert heading and detail", () => {
    render(
      <AlertCard
        heading="Fatigue Warning"
        detail="Please rest now"
        type="alert"
      />
    );

    expect(screen.getByText("Fatigue Warning")).toBeInTheDocument();
    expect(screen.getByText("Please rest now")).toBeInTheDocument();
  });

  it("renders correct border color for alert", () => {
    render(
      <AlertCard heading="Alert Heading" detail="Alert detail" type="alert" />
    );
    expect(screen.getByTestId("alert-card")).toHaveClass("border-pink-500");
  });

  it("renders default border color for alarm (gray)", () => {
    render(
      <AlertCard heading="Alarm Heading" detail="Alarm detail" type="alarm" />
    );
    expect(screen.getByTestId("alert-card")).toHaveClass("border-gray-50");
  });

  it("renders gray border when type is not provided", () => {
    render(<AlertCard heading="Default Alert" detail="No type passed" />);
    expect(screen.getByTestId("alert-card")).toHaveClass("border-gray-50");
  });
});
