import ProfileCircle from "../profile-circle/ProfileCircle";

function PostItem({ post }) {
  return (
    <div className="post-card-container">
        <div>
            <ProfileCircle userInitals={"Placeholder"}/>
            <div>
                <h4>{"Name"}</h4>
                <p>{"Title"}</p>
            </div>
        </div>
        <div>
            <p>{"Content"}</p>
        </div>
    </div>
  );
}

export default PostItem;