import React from "react";
import "./network-card.scss";

function NetworkCard({
  imgSrc,
  description,
}: {
  imgSrc: string;
  description: string;
}) {
  return (
    <div className={`networkContainer`}>
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

export default NetworkCard;
