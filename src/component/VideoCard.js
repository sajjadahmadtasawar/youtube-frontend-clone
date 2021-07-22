import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/vidercard.css';
function VideoCard({
  image,
  chanel,
  chanelImage,
  chanelName,
  views,
  timeStamp,
  videoTitle,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={chanel}></img>
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={chanelImage} alt={chanel} />
        <div className="videoCard__text">
          <h4>{videoTitle}</h4>
          <p>{chanelName}</p>
          <p>
            {views} Views . {timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
