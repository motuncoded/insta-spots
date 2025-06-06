import posts from "../json/posts.json";

const Cards = () => {
  return (
    <section className="cards" aria-label="Cards Section">
      {posts.map((post, index) => {
        return (
          <div key={index} className="card">
            <img src={post.imgSrc} alt={post.name} />
            <div className="card__content">
              <h3>{post.name}</h3>
              <img
                src="./assets/like-icon-default.svg"
                alt="like-icon"
                className="like-button"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
