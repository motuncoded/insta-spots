import React from "react";

function EditProfileModal() {
  return (
    <section
      className="modal-overlay"
      id="editModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="createPostTitle"
      aria-describedby="createPostDesc"
      tabIndex="-1"
    >
      <div className="modal-content">
        <button
          className="modal-close"
          id="closeModal"
          aria-label="Close Create Post Modal"
          type="button"
        >
          &times;
        </button>
        <h4 className="modal-title">Edit Profile</h4>
        <form id="editForm">
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bioInput">Bio</label>
            <textarea
              className="form-control"
              id="bioInput"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="imageInput">Profile Picture</label>
            <input
              type="file"
              className="form-control"
              id="imageInput"
              accept="image/*"
              aria-required="true"
            />
          </div>
          <div className="image-preview-container">
            <img
              id="imagePreview"
              className="image-preview"
              alt="Profile preview"
            />
          </div>
          <div className="form-actions">
            <button type="button" className="btn btn-secondary" id="cancelEdit">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditProfileModal;
