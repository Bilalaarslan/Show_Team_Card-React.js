import React from "react";

const Course = ({ image, title, description, subTitle }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Football Teams" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{subTitle}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
};

export default Course;
