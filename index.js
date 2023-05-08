const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="card-image"
      />
      <h1 className="card-heading">Kiran V</h1>
      <p className="card-paragraph">
        Vishnu Institute of Computer Education And Technology, Bimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="card-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
