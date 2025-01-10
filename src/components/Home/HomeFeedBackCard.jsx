import "./HomeFeedBackCard.css";
const HomeFeedBackCard = ({ img, text, people }) => {
  return (
    <div className="homeFeedBackCard">
      <div className="main">
        <div className="I">
          <img src={img} alt="" />
        </div>
        <div className="II">
          <p>{text}</p>
        </div>
        <span></span>
        <div className="aaa">
          <p>{people}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFeedBackCard;
