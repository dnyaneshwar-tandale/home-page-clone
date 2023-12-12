import React from "react";
import "./team-card.scss";

function TeamCard({
  imgSrc,
  description,
}: {
  imgSrc: string;
  description: string;
}) {
  return (
    <div className={`teamContainer`}>
      <div className="imageWrapper">
        <img className="imageBlock" src={imgSrc} alt="" />
      </div>

      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
}

export default TeamCard;
