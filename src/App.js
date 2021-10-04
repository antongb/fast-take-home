import React, { useState } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar';
import Main from './components/Main';
import Playlist from './components/Playlist';


function App() {
  const [searchInput, setSearchInput] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  return (
    <Router>
      <div className='App'>
        <NavBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setMovieList={setMovieList}
        />
        <Switch>
          <Route exact path='/'>
            <Main
              movieList={movieList}
              playlist={playlist}
              setPlaylist={setPlaylist}
            />
          </Route>
          <Route path='/playlist'>
            <Playlist
              playlist={playlist}
              setPlaylist={setPlaylist}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
