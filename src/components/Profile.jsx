import { useState } from "react";

const ProfileCard = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Bessie Coleman",
    bio: "Civil Aviator",
    avatar: "./assets/avatar.svg",
  });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const [tempData, setTempData] = useState({ ...profileData });
  const [previewImage, setPreviewImage] = useState(null);


    // New post state
    const [newPost, setNewPost] = useState({
      title: "",
      image: null,
      preview: null,
      likes: 0,
      isLiked: false
    });
    const [posts, setPosts] = useState([]);


  
  
    const handleEditClick = () => {
      setTempData({ ...profileData });
      setPreviewImage(null);
      setIsProfileModalOpen(true); // <-- Change this line
    };
  
  const handleNewPostClick = () => {
    setIsPostModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };


  const handlePostInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost((prev) => ({
          ...prev,
          image: file,
          preview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedData = {
      ...tempData,
      avatar: previewImage || profileData.avatar,
    };
    setProfileData(updatedData);
    setIsProfileModalOpen(false);
  };

  const handlePostSave = () => {
    const newPostData = {
      ...newPost,
      id: Date.now(),
    };
    setPosts((prevPosts) => [newPostData, ...prevPosts]);
    // Reset and close modal
    setNewPost({
      title: "",
      image: null,
      preview: null,
      likes: 0,
      isLiked: false,
    });
    setIsPostModalOpen(false);
  };

  const toggleLike = () => {
    setNewPost((prev) => ({
      ...prev,
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
    }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsProfileModalOpen(false);
  };

  const handlePostCancel = (e) => {
    e.preventDefault();
    setIsPostModalOpen(false);
  };
  return (
    <section className="hero__profile">
      <div className="hero__content" aria-label="Hero profile section">
        <picture>
          <img
            src={profileData.avatar}
            alt="Profile picture of person"
            className="profile__img"
          />
        </picture>
        <div className="profile__content" aria-label="Profile Section">
          <h2 className="profile__name">{profileData.name}</h2>
          <h3 className="profile__bio">{profileData.bio}</h3>

          <button
            type="button"
            className="profile__edit"
            aria-label="Edit Profile Button"
            onClick={handleEditClick}
          >
            <img src="./assets/edit-icon.svg" alt="Edit Profile Icon" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>
      <div className="new_post">
        <button
          type="button"
          aria-label="New Post Button"
          onClick={handlePostSave}
        >
          <img src="./assets/plus-icon.svg" alt="New Post Icon" />
          <span>New Post</span>
        </button>
      </div>

      {/* Edit Profile Modal */}
      {isProfileModalOpen && (
        <div className="modal-overlay" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Edit Profile</h4>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={tempData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <input
                type="text"
                id="bio"
                name="bio"
                value={tempData.bio}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={handleImageChange}
                className="visually-hidden"
              />
              <label htmlFor="avatar" className="file-input-label">
                Choose File
              </label>
              {previewImage && (
                <div className="image-preview">
                  <img src={previewImage} alt="Preview" />
                </div>
              )}
            </div>

            <div className="modal-actions">
              <button onClick={handleSave} className="save__button">
                Save Changes
              </button>
              <button onClick={handleCancel} className="cancel__button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Post Modal */}
      {isPostModalOpen && (
        <div className="modal-overlay" aria-modal="true">
          <div
            className="modal-content post-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h4>Create New Post</h4>

            <div className="form-group">
              <label htmlFor="post-title">Title</label>
              <input
                type="text"
                id="post-title"
                name="title"
                value={newPost.title}
                onChange={handlePostInputChange}
                placeholder="Enter post title"
              />
            </div>

            <div className="form-group">
              <input
                type="file"
                id="post-image"
                name="image"
                accept="image/*"
                onChange={handlePostImageChange}
                className="visually-hidden"
              />
              <label htmlFor="post-image" className="file-input-label">
                {newPost.preview ? "Change Image" : "Choose Image"}
              </label>
              {newPost.preview && (
                <div className="image-preview">
                  <img src={newPost.preview} alt="Post preview" />
                </div>
              )}
            </div>

            <div className="like-section">
              <button
                onClick={toggleLike}
                className={`like-button ${newPost.isLiked ? "liked" : ""}`}
                aria-label={newPost.isLiked ? "Unlike post" : "Like post"}
              >
                <img
                  src={
                    newPost.isLiked
                      ? "./assets/like-icon-active.svg"
                      : "./assets/like-icon-default.svg"
                  }
                  alt="Heart icon"
                />
              </button>
            </div>

            <div className="modal-actions">
              <button
                onClick={handlePostSave}
                className="save__button"
                disabled={!newPost.title || !newPost.image}
              >
                Post
              </button>
              <button onClick={handlePostCancel} className="cancel__button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

function Profile() {
  return (
    <>
      <ProfileCard />
    </>
  );
}

export default Profile;
