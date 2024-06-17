import { createContext, useReducer } from "react";

export const BlogContext = createContext();

export const BlogReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        blogs: action.payload,
      };
    case "CREATE_BLOG":
      return {
        blogs: [action.payload, ...state.blogs],
      };
    case "DELETE_BLOG":
      return {
        blogs: state.blogs.filter((b) => b._id !== action.payload._id),
      };
    default:
      return state;
  }                  
};

// eslint-disable-next-line react/prop-types
export const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BlogReducer, {
    blogs: [],
  });

  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
