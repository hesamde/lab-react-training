function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
      <div className="item">
        <div>
          <img
            className="item"
            src={picture}
            alt={firstName}
          />
        </div>
        <div>
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height}</p>
          <p>Birth: {birth.toISOString().split('T')[0]}</p>
        </div>
      </div>
    );
  }
  export default IdCard;