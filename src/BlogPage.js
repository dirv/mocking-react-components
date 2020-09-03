import React from "react"
import { PostContent } from "./PostContent"

const getPostIdFromUrl = url =>
  url.substr(url.lastIndexOf("/") + 1)

export const BlogPage = ({ url }) => {

  const id = getPostIdFromUrl(url);

  const handleSignUp = () => {
    // ...
  };

  return (
    <PostContent id={id}>
      <input type="email" placeholder="Sign up to my mailing list!" />
      <button onClick={handleSignUp}>Sign up</button>
    </PostContent>
  )
}
