/* eslint-disable react/prop-types */
import { useBlogsContext } from "../hooks/useBlogsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow"


const BlogDetails = ({ blog }) => {

  const { dispatch } = useBlogsContext()

  const handleDelete = async () => {
    const response = await fetch(`https://blogger-xd.onrender.com/api/blogs/${blog._id}`,{
      method: "DELETE"
    })
    const json = await response.json()

    if (response.ok){
      dispatch({type: "DELETE_BLOG", payload:json})
    }
  }

  return (
    <div className="blog-details">
      <button className="delete-btn" onClick={handleDelete}>❌</button>
      <header>
        <h4>{blog.title}</h4>
      </header>
      <p className="content">{blog.content}</p>
      <footer>
        <p className="author">Published by: {blog.publisher}</p>
        <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
      </footer>
    </div>
  );
};

export default BlogDetails;
