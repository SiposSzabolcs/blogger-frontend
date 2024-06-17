import { BlogContext } from "../context/BlogContext.jsx";
import { useContext } from "react";

export const useBlogsContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw Error("useBlogsContext must be used inside a BlogsContextProvider!");
  }

  return context;
};
