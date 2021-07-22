import React from 'react';
import '../styles/searchpage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChanelRow from './ChanelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChanelRow
        verified
        description="Animated series Family Guy features the adventures of the Griffin family. Endearingly ignorant Peter and his stay-at-home wife Lois reside in Quahog, R.I., and ..."
        subs="45M"
        noVideos="456"
        chanelName="Family Guy"
        image="https://www.liveabout.com/thmb/D4sWEMjpo8wXqcQJJ5mGbsPBxII=/1500x1200/filters:no_upscale():max_bytes(150000):strip_icc()/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg"
      />
      <hr
        style={{
          height: '1px',
          marginTop: '30px',
          border: 0,
          backgroundColor: 'lightgrey',
        }}
      />
      <VideoRow
        chanelName="Family Guy"
        description="family guy is one the best animation cartoons that you would find in your life and also is highly rated by critics..."
        views="11M"
        timestamp="3 days ago"
        subs="45M"
        title="New Season new Eposide of family Guy EP:1"
        thumbnail="https://i.ytimg.com/vi/Ci6_A725GWU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUW3q1eBx31OWO0FlMJDr8IRmyJw"
      />
      <VideoRow
        chanelName="Family Guy"
        description="family guy is one the best animation cartoons that you would find in your life and also is highly rated by critics..."
        views="1.5k"
        timestamp="50 seconds ago"
        subs="45M"
        title="New Season new Eposide of family Guy EP:2"
        thumbnail="https://i.ytimg.com/vi/dJtSRShcg5U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBhN8UMbA75cj0LIPeRVhXiFOZ2g"
      />
      <VideoRow
        chanelName="Family Guy"
        description="family guy is one the best animation cartoons that you would find in your life and also is highly rated by critics..."
        views="22k"
        timestamp="5 hours ago"
        subs="45M"
        title="New Season new Eposide of family Guy EP:3"
        thumbnail="https://i.ytimg.com/vi/79Zcv9nYeZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6cCNt5qsMTOsWihpv76eIIPb2mg"
      />
    </div>
  );
}

export default SearchPage;
