import React from "react";
import "./network-card.scss";
import Button from "../button/button";

function NetworkCard({
  imgSrc,
  description,
  title,
  buttonName='',
  buttonType='',
  buttonSize='',
buttonStyle='',
}: {
  imgSrc: string;
  description: string;
  title: string;
  buttonName?: string;
  buttonType?: string;
  buttonSize?:string;
buttonStyle?:string;
}) {
  return (
    <div className={`networkContainer ${buttonName?"networkContainerSpace":''}`}>
      <div className="imageWrapper">
        <img className="imageBlock" src={imgSrc} alt="" />
      </div>
      <h1 className="title">{title}</h1>
      <div
        className={`network-description ${buttonName?"description-center":""}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      {
        buttonName&&<div className="description-button">
        <Button buttonStyle={buttonType} buttonSize={buttonSize} >{buttonName}</Button>
      </div>
      }
    </div>
  );
}

export default NetworkCard;
