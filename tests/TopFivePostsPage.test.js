import React from "react"
import { PostContent } from "../src/PostContent";
import { TopFivePostsPage } from "../src/TopFivePostsPage";
import { screen, render } from "@testing-library/react";

jest.mock("../src/PostContent", () => ({
  PostContent: jest.fn(() => <div data-testid="PostContent" />)
}))

describe("BlogPage", () => {
  it("renders five PostContent components", () => {
    render(<TopFivePostsPage />)
    expect(screen.queryAllByTestId("PostContent")).toHaveLength(5)
  })

  it("constructs a PostContent for each top 5 entry", () => {
    render(<TopFivePostsPage />)
    expect(PostContent).toHaveBeenCalledWith({ id: "top1" }, expect.anything())
    expect(PostContent).toHaveBeenCalledWith({ id: "top2" }, expect.anything())
    expect(PostContent).toHaveBeenCalledWith({ id: "top3" }, expect.anything())
    expect(PostContent).toHaveBeenCalledWith({ id: "top4" }, expect.anything())
    expect(PostContent).toHaveBeenCalledWith({ id: "top5" }, expect.anything())
  })
})
