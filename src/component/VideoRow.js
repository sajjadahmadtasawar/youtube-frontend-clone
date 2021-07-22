import React from 'react';
import '../styles/videorow.css';
function VideoRow({
  thumbnail,
  chanelName,
  title,
  description,
  subs,
  views,
  timestamp,
}) {
  return (
    <div className="videoRow">
      <img className="videoRow__image" src={thumbnail} alt={title}></img>
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p>
          {chanelName} .{' '}
          <span className="videoRow__subInfo">
            <span className="viderRow__subs">{subs}</span> Subcribers
          </span>{' '}
          {views} Views . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
