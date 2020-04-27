import React from "react";
import "./styles/BadgesList.css";

const BadgesListItem = ({
  badge: { avatarUrl, firstName, lastName, twitter, jobTitle },
}) => {
  return (
    <div className='BadgesListItem'>
      <img
        className='BadgesListItem__avatar'
        src={avatarUrl}
        alt={`${firstName} ${lastName}`}
      />
      <div>
        <strong>
          {firstName} {lastName}
        </strong>
        <br />@{twitter}
        <br />
        {jobTitle}
      </div>
    </div>
  );
};
export default BadgesListItem;
