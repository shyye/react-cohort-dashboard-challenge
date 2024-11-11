import { useContext, useState } from "react";
import ProfileCircle from "../profile-circle/ProfileCircle";
import "./posts.css";
import { AppContext } from "../../App";

function CreatePost() {
  const { loggedInUser } = useContext(AppContext);
  const [textContent, setTextContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="post-card-container create-post">
      <ProfileCircle userInitals={loggedInUser.initials} />
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="text"></label> */}
        <input
          type="text"
          id="text"
          name="text"
          onChange={(e) => setTextContent(e.target.value)}
          placeholder="What's on your mind?"
          value={textContent}
        />
        <button type="submit" className="post-button">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
