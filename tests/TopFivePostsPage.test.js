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

  // NOTE: this test should replace the one above. it’s not necessary
  // to have both tests since they test the same thing!
  // You also need to ensure you set "clearMocks: true" in package.json
  it("renders PostContent items in the right order", () => {
    render(<TopFivePostsPage />)
    const postContentIds = PostContent.mock.calls.map(args => args[0].id)
    expect(postContentIds).toEqual([
      "top1", "top2", "top3", "top4", "top5"
    ])
  })
})
