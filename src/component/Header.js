import React, { useState } from 'react';
import '../styles/header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
function Header() {
  const [search, setSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://live.staticflickr.com/3323/3606295240_51f643dd5d_b.jpg"
            alt="youtube-icon"
          ></img>
        </Link>
      </div>
      <div className="header__center">
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={`/search/${search}`}>
          <SearchIcon className="header__searchIcon" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://www.liveabout.com/thmb/D4sWEMjpo8wXqcQJJ5mGbsPBxII=/1500x1200/filters:no_upscale():max_bytes(150000):strip_icc()/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg"
          className="header__icon"
          alt="peter"
        />
      </div>
    </div>
  );
}

export default Header;
