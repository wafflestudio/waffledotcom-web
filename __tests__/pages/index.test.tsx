import { render, screen } from "@testing-library/react";
import Home from "../../pages";
import "@testing-library/jest-dom";
import { beforeEach } from "@jest/globals";

describe("Home 컴포넌트에", () => {
  beforeEach(() => {
    render(<Home />);
  });
  it("제목으로 와플스튜디오가 있다", () => {
    const heading = screen.getByRole("heading", {
      name: /와플스튜디오/i,
    });
    expect(heading).toBeInTheDocument();
  });
  const names = ["소개", "서비스", "멤버"];
  names.forEach((name) =>
    it(`${name}(이)라는 이름의 링크가 있다`, () => {
      const button = screen.getByRole("button", {
        name,
      });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("href", /^#.+$/);
      const dest = button.getAttribute("href");
      const destElement = document.querySelector(`[id="${dest?.slice(1)}"]`);
      expect(destElement).toBeInTheDocument();
    }),
  );
});
