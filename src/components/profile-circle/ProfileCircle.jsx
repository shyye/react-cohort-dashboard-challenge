import "./ProfileCircle.css";

function ProfileCircle({ userInitals}) {

    return (
        <div className="profile-circle">
            {userInitals}
        </div>
    )
}

export default ProfileCircle;