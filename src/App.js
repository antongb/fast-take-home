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
            <Main movieList={movieList} />
          </Route>
          <Route path='/playlist' component={Playlist}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
