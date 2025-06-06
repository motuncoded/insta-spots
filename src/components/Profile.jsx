const ProfileCard = () => {
  return (
    <section className="hero__profile">
      <div className="hero__content" aria-label="Hero profile section">
        <picture>
          <img
            src="./assets/avatar.svg"
            alt="Profile picture of person"
            className="profile__img"
          />
        </picture>
        <div className="profile__content" aria-label="Profile Section">
          <h2 className="profile__name">Bessie Coleman</h2>
          <h3 className="profile__bio">Civil Aviator</h3>

          <button
            type="button"
            className="profile__edit"
            aria-label="Edit Profile Button"
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
