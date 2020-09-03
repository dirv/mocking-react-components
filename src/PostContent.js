import React, { useEffect } from "react"

export const PostContent = ({ id }) => {
  useEffect(() => {
    fetchPostContent(id);
  }, [id])

  const fetchPostContent = async () => {
    const result = await fetch(`/post?id=${id}`)
    if (result.ok) {
      setContent(result.body())
    }
  };

  return null
};

