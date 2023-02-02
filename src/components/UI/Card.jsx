import "./Card.css";

export default function Card(props) {
  const { profileImg, userID, location, cardImg, contents } = props.data;

  return (
    <div className="card">
      <div className="cardHeader">
        <div className="profile">
          <img src={profileImg} alt="" />
        </div>
        <div>
          <div className="userID">{userID}</div>
          <div className="location">{location}</div>
        </div>
      </div>
      <div className="cardBody">
        <div className="leftBar"></div>
        <div className="cardImg">
          <img src={cardImg} alt="" />
        </div>
        <div className="rightBar"></div>
      </div>
      <div className="contents">{contents}</div>
    </div>
  );
}
