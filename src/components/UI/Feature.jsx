const Feature = (props) => {
  // Destructuring incoming props i.e., images coming from Unsplash
  const { feature } = props;

  return (
    <div className="feature">
      <div className="feature-user">
        <img
          src={feature.user.profile_image.medium}
          alt="user thumbnail"
          className="user-thumbnail"
        />
        <div className="user">
          <h5>{feature.user.name}</h5>
          <small>{feature.user.location}</small>
        </div>
      </div>
      <div className="feature-img">
        <div className="reactions">
          <img
            src="./images/dislike.svg"
            alt="dislike button"
            className="dislike"
          />
          <img
            src="./images/bookmark.svg"
            alt="bookmark button"
            className="bookmark"
          />
        </div>
        <div className="feature-main-img">
          <img src={feature.urls.regular} alt="" />
        </div>
        <div className="reactions">
          <img src="./images/like.svg" alt="like button" className="like" />
          <img
            src="./images/comment.svg"
            alt="comment button"
            className="comment"
          />
        </div>
      </div>
      <div className="feature-caption">
        <small className="caption">
          {feature.description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam excepturi aut minima aspernatur vitae mollitia eligendi alias veniam possimus quia!"}
        </small>
      </div>
    </div>
  );
};

export default Feature;
