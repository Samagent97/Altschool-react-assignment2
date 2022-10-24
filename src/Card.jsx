import './Card.css';


const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img alt="Profile Pic" src={data.picture.medium} />
      </div>
      <div className="card-content">
        <div className="text">
          <div style={{ marginLeft: "1.5rem", width: '10rem', display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
            <h4>{data.name.title}</h4>
            <h4>{data.name.first}</h4>
            <h4>{data.name.last}</h4>
          </div>
          <p>{data.gender}</p>
          <p>{data.email}</p>
        </div>
        <div className="btn">
          <button className="custom-button" style={{ width: "8rem" }} onClick={() => { alert("Page Currently Unavailble") }}>View More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

