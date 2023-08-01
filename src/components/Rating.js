const Rating = ({ children }) => {

  const starRat = ['☆ ☆ ☆ ☆ ☆', '★ ☆ ☆ ☆ ☆', '★ ★ ☆ ☆ ☆', '★ ★ ★ ☆ ☆', '★ ★ ★ ★ ☆', '★ ★ ★ ★ ★'];
  const ratingIndex = Math.min(Math.floor(children), 5);
  const star = starRat[ratingIndex];

  return (
    <div className="item">
      <div key={Math.random()*1000}>{star}</div>;
    </div>
  );
};

export default Rating;


