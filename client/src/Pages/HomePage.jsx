import React from "react";

function HomePage() {
  return (
    <>
      <h1>Welcome to CUT👑!</h1>
      <div className="course-cards-wrapper">
      <div className="course-card-container">
        <img className="course-card-image" src="https://elearningindustry.com/wp-content/uploads/2023/01/shutterstock_65295724.jpg" alt="IT security course image"/>
        <p className="course-card-title">
          IT Säkerhet
        </p>
        <p className="course-card-subject">
          IT
        </p>
        <p className="course-card-description">
          A four week course containing a basic introduction to IT Security for those with some experiance in programming
        </p>
        <p className="course-card-tags">
          #Tag1, #Tag2
        </p>
        <p className="course-card-price">
          100$
        </p>
        <button className="course-card-buy-button">
          <h2 className="course-card-buy-button-text">
            Buy
          </h2>
        </button>
      </div>
      </div>
    </>
  );
}
export default HomePage;
