import { useState } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const { dispatch } = useBlogsContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [publisher, setPublisher] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = { title, content, publisher };

    const response = await fetch("https://blogger-xd.onrender.com/api/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      console.log(error)
      console.log(emptyFields)
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setContent("");
      setPublisher("");
      setEmptyFields([]);
      console.log("new blog added:", json);
      dispatch({ type: "CREATE_BLOG", payload: json });
      navigate("/")
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>Add blog:</h1>

      <label>Blog title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Blog content:</label>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={emptyFields.includes("content") ? "error" : ""}
      />

      <label>Blog publisher:</label>
      <input
        type="text"
        onChange={(e) => setPublisher(e.target.value)}
        value={publisher}
        className={emptyFields.includes("publisher") ? "error" : ""}
      />

      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddBlog;
