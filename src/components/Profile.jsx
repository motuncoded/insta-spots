import { useState } from "react";

const ProfileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Bessie Coleman",
    bio: "Civil Aviator",
    avatar: "./assets/avatar.svg",
  });

  const [tempData, setTempData] = useState({ ...profileData });
  const [previewImage, setPreviewImage] = useState(null);

  const handleEditClick = () => {
    setTempData({ ...profileData });
    setPreviewImage(null);
    setIsModalOpen(true);
    alert("clicked");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
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

  const handleSave = () => {
    const updatedData = {
      ...tempData,
      avatar: previewImage || profileData.avatar,
    };
    setProfileData(updatedData);
    setIsModalOpen(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
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
        <button type="button" aria-label="New Post Button">
          <img src="./assets/plus-icon.svg" alt="New Post Icon" />
          <span>New Post</span>
        </button>
      </div>
      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="modal-overlay" aria-modal="true">
          <div className="modal-content">
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
