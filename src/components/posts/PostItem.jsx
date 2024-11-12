import { useEffect, useState } from "react";
import ProfileCircle from "../profile-circle/ProfileCircle";

function PostItem({ post }) {
  const [comments, setComments] = useState([]);

  // Get comments for this post
  const getComments = async () => {
    const res = await fetch(
      `https://boolean-uk-api-server.fly.dev/shyye/post/${post.id}/comment`
    );
    const data = await res.json();
    setComments(data);
  };

  // Load data
  useEffect(() => {
    getComments();
    console.log(comments);
  }, []);

  return (
    <div className="post-card-container">
      <div className="post-header-wrapper">
        <ProfileCircle userInitals={"Placeholder"} />
        <div>
          <h4>{post.contactId}</h4>
          <p>{post.title}</p>
        </div>
      </div>
      <div>
        <p>{post.content}</p>
      </div>
      <div>{comments.map((comment) => (
        <div key={comment.id} className="post-comment-wrapper">
          <ProfileCircle userInitals={comment.contactId} />
          <div className="post-comment">
            <strong>Contact id: {comment.contactId} / Name</strong>
            <br />
            {comment.content}
          </div>
        </div>
      ))}</div>
    </div>
  );
}

export default PostItem;
