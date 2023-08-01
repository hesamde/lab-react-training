import Rating from "./Rating";

function DriverCard({ img, name, rating, car }) {
  return (
    <div className="driver">
      <div>
        <img src={img} alt="driver img" />
      </div>
      <div className="infos">
        <h2 className="driverText">{name}</h2>
        <div className="rate driverText">
          <Rating>{rating}</Rating>
        </div>
        <p className="driverText">{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
