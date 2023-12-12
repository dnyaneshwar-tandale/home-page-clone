import React from "react";
import "./image-block.scss";
import Button from "../button/button";

function ImageBlock({
  imgSrc,
  title,
  description,
  buttonName,
  buttonType,
  buttonSize,
  buttonStyle,
  isReverse,
}: {
  imgSrc: string;
  title: string;
  description: string;
  buttonName: string;
  buttonType: string;
  buttonSize:string;
buttonStyle:string;
isReverse:boolean;
}) {
  return (
      <div className={`imageContainer ${isReverse? 'reverseContainer':''}`}>
        <div className="imageWrapper">
          <img className="imageBlock" src={imgSrc} alt="" />
        </div>
        <div className="imageDerscription">
          <div className="title">{title}</div>
          <div className="description" dangerouslySetInnerHTML={{__html: description}}>
          </div>
          <div className="button">
            <Button buttonStyle={buttonType} buttonSize={buttonSize} >{buttonName}</Button>
          </div>
        </div>
      </div>
  );
}

export default ImageBlock;
