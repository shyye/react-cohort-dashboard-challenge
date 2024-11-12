import { useContext, useEffect, useState } from "react";
import ProfileCircle from "../profile-circle/ProfileCircle";
import { AppContext } from "../../App";

function PostItem({ post }) {
  // Get firstname, lastname and initals from contactId
  const [contact, setContact] = useState({});

  const getContact = async () => {
    const res = await fetch(
      `https://boolean-uk-api-server.fly.dev/shyye/contact/${post.contactId}`
    );

    // Case for dummy data for loggedInUser (test user)
    if (post.contactId === 42) {
      const contactObject = {
        firstname: "John",
        lastname: "Doe",
        initials: "JD",
      };
      setContact(contactObject);
      return;
    }
    const data = await res.json();

    const contactObject = {
      firstname: data.firstName,
      lastname: data.lastName,
      initials: data.firstName[0] + data.lastName[0],
    };
    setContact(contactObject);
  };

  const { loggedInUser } = useContext(AppContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Get comments for this post
  const getComments = async () => {
    const res = await fetch(
      `https://boolean-uk-api-server.fly.dev/shyye/post/${post.id}/comment`
    );
    const data = await res.json();
    setComments(data);
  };

  // Submit comment
  const submitComment = async (commentData) => {
    commentData.preventDefault();
    const commentDataObject = {
      postId: post.id,
      content: newComment,
      contactId: loggedInUser.contactId,
    };

    const res = await fetch(
      `https://boolean-uk-api-server.fly.dev/shyye/post/${post.id}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentDataObject),
      }
    );
    const data = await res.json();
    setComments([...comments, data]);
  };

  // Load data
  useEffect(() => {
    getComments();
    getContact();
  }, []);

  return (
    <div className="post-card-container">
      <div className="post-header-wrapper">
        <ProfileCircle userInitals={contact.initials} />
        <div>
          <h4>
            {contact.firstname} {contact.lastname}
          </h4>
          <p>{post.title}</p>
        </div>
      </div>
      <div>
        <p>{post.content}</p>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="post-comment-wrapper">
            <ProfileCircle userInitals={comment.contactId} />
            <div className="post-comment">
              <strong>Contact id: {comment.contactId} / Name</strong>
              <br />
              {comment.content}
            </div>
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={submitComment}>
          <input
            type="text"
            id="comment"
            name="comment"
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="What's on your mind?"
            value={newComment}
          />
          <button type="submit" className="post-button ">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostItem;
