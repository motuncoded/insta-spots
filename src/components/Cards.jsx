import React, {useState} from "react";
import LikeIconDefault from "/assets/like-icon-default.svg";
import LikeIconActive from "/assets/like-icon-active.svg";
import LikeIconHover from "/assets/like-icon-hover.svg"; // Add a hover state icon

import posts from "../json/posts.json";




const Cards = () => {
  const newPost = posts.map((post) => ({
    ...post,
    liked: false,
    hovered: false
  }));

  const [cards, setCards] = useState(newPost);
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
  return (
    <section className="cards" aria-label="Cards Section">
      {cards.map((card, index) => {
        return (
          <div key={index} className="card">
            <img src={card.imgSrc} alt={card.name} />
            <div className="card__content">
              <h3>{card.name}</h3>
              <button
                type="button"
                className="like-button"
                onMouseEnter={() => handleHover(card.name, true)}
                onMouseLeave={() => handleHover(card.name, false)}
                onClick={() => updateLikeStatus(card.name)}
                onhover
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
    </section>
  );
};

export default Cards;
