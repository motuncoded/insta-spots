import React, { useState } from "react";
import LikeIconDefault from "/assets/like-icon-default.svg";
import LikeIconActive from "/assets/like-icon-active.svg";
import LikeIconHover from "/assets/like-icon-hover.svg"; // Add a hover state icon

import posts from "../json/posts.json";

const Cards = () => {
  const newPost = posts.map((post) => ({
    ...post,
    liked: false,
    hovered: false,
  }));

  const [cards, setCards] = useState(newPost);
  const [selectedImage, setSelectedImage] = useState(null);

  // Update like status
  const updateLikeStatus = (name) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.name === name ? { ...card, liked: !card.liked } : card,
      ),
    );
  };

  // Hover on each like button
  const handleHover = (name, isHovering) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.name === name ? { ...card, hovered: isHovering } : card,
      ),
    );
  };

  // Open modal with selected image
  const openModal = (card) => {
    setSelectedImage(card);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <section className="cards" aria-label="Cards Section">
      {cards.map((card, index) => {
        return (
          <div key={index} className="card">
            <img
              src={card.imgSrc}
              alt={card.name}
              onClick={() => openModal(card)}
              style={{ cursor: "pointer" }}
            />
            <div className="card__content">
              <h3>{card.name}</h3>
              <button
                type="button"
                className="like-button"
                onMouseEnter={() => handleHover(card.name, true)}
                onMouseLeave={() => handleHover(card.name, false)}
                onClick={() => updateLikeStatus(card.name)}
                aria-label={card.liked ? "Unlike this post" : "Like this post"}
              >
                <img
                  src={
                    card.liked
                      ? LikeIconActive
                      : card.hovered
                        ? LikeIconHover
                        : LikeIconDefault
                  }
                  alt={card.liked ? "Liked icon" : "Like icon"}
                  className="like-icon"
                />
              </button>
            </div>
          </div>
        );
      })}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.imgSrc}
              alt={selectedImage.name}
              className="modal-image"
            />
            <h3 className="modal-title">{selectedImage.name}</h3>
          
          </div>
        </div>
      )}
    </section>
  );
};

export default Cards;
