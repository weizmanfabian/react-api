const Character = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((v, i) => (
        <div key={i} className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={v.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{v.name}</h5>
              <hr />
              <p>Location: {v.species}</p>
              <p>Location: {v.location.name}</p>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Character;