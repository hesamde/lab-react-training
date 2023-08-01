

const Rating = ({ children }) => {
  const starRatings = ['☆ ☆ ☆ ☆ ☆', '★ ☆ ☆ ☆ ☆', '★ ★ ☆ ☆ ☆', '★ ★ ★ ☆ ☆', '★ ★ ★ ★ ☆', '★ ★ ★ ★ ★'];
  const ratingIndex = Math.min(Math.floor(children), 5);
  const star = starRatings[ratingIndex];

  return (
    <div className="item">
      <div>{star}</div>
    </div>
  );
};

export default Rating;
