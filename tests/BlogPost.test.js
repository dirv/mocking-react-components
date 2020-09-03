import React from "react"
import { PostContent } from "../src/PostContent";
import { BlogPage } from "../src/BlogPage";
import { screen, render } from "@testing-library/react";

jest.mock("../src/PostContent", () => ({
  PostContent: jest.fn(() => <div data-testid="PostContent" />)
}))

describe("BlogPage", () => {
  it("renders a PostContent", () => {
    render(<BlogPage url="http://example.com/blog/my-web-page" />)
    expect(screen.queryByTestId("PostContent")).toBeInTheDocument()
  })

  it("constructs a PostContent with an id prop created from the url", () => {
    const postId = "my-amazing-post"
    render(<BlogPage url={`http://example.com/blog/${postId}`} />)
    expect(PostContent).toHaveBeenCalledWith(
      { id: postId },
      expect.anything())
  })
})
