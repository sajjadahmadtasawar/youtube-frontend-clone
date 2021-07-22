import './App.css';
import Header from './component/Header';
import RecommendedVideos from './component/RecommendedVideos';
import SideBar from './component/SideBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './component/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__homePage">
          <Switch>
            <Route path="/search/:content">
              <SideBar />
              <SearchPage />
            </Route>
            <Route path="/">
              <SideBar />
              <RecommendedVideos />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
