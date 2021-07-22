import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/chanelrow.css';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
function ChanelRow({
  image,
  chanelName,
  description,
  subs,
  noVideos,
  verified,
}) {
  return (
    <div className="chanelRow">
      <Avatar className="chanelRow__logo" src={image} alt={chanelName} />
      <div className="chanelRow__text">
        <h4>
          {chanelName} {verified && <CheckCircleTwoToneIcon />}
        </h4>

        <p>
          {subs} Subscribers . {noVideos} Videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChanelRow;
