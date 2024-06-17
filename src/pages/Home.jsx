import { useEffect } from "react";
import BlogDetails from "../Components/BlogDetails";
import { useBlogsContext } from "../hooks/useBlogsContext";


const Home = () => {
  const {blogs, dispatch} = useBlogsContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("https://blogger-xd.onrender.com/api/blogs/");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: json});
      }
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    <div className="Home">
      <div className="blogs">
        {blogs &&
          blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Home;
