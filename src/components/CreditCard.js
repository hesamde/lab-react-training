function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  // Extract the last 4 digits of the credit card number
const sliced = '**** **** **** ' + number.slice(-4);
  return (
    <div
      className="item"
      style={{
        color: `${color}`,
        width: '400px',
        height: '200px',
        backgroundColor: `${bgColor}`,
      }}
    >
      <h3>{type}</h3>
      <h1>{sliced}</h1>
      <d iv className="flex flex-row">
        <h5>
          Expires {expirationMonth}/{expirationYear}
        </h5>
        <h5 className="ml-5">{bank}</h5>
      </d>
      <h5>{owner}</h5>
    </div>
  );
}
export default CreditCard;
