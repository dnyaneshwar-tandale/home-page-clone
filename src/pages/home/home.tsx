import React from "react";
import "./home.scss";
import ImageBlock from "../../component/image-block/image-block";
import { INNOVATIVE_TEAM, NETWORK_TEAM, RELEASE_NOTES } from "../../constants/home-page";
import TeamCard from "../../component/team-card/team-card";
import NetworkCard from "../../component/network-card/network-card";

function HomePage() {
  return (
    <div className="container">
      <div className="image-wrapper">
        {RELEASE_NOTES?.map((card) => {
          return (
            <ImageBlock
              title={card?.title}
              buttonName={card?.buttonText}
              description={card?.description}
              imgSrc={card?.imgSrc}
              buttonType={card?.buttonType}
              buttonSize={card?.buttonSize}
              buttonStyle={card?.buttonStyle}
              isReverse={card?.isReverse}
            />
          );
        })}
      </div>

      <div className="team-wrapper">
        <p className="title">
          <h1>Used by the world's most innovative teams</h1>
        </p>
        {INNOVATIVE_TEAM?.map((card) => {
          return (
            <TeamCard description={card?.description} imgSrc={card?.imgSrc} />
          );
        })}
      </div>

      <div className="network-wrapper">
        <p className="title">
          <h1>Secure networks for teams of any size</h1>
        </p>
       <div className="block">
       {NETWORK_TEAM?.map((card) => {
          return (
            <NetworkCard description={card?.description} imgSrc={card?.imgSrc} />
          );
        })}
       </div>
      </div>
    </div>
  );
}

export default HomePage;
