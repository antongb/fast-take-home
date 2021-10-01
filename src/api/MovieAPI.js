import axios from 'axios'

export const fetchMovies = (value, setMovieList) => {
  axios({
    method: 'get',
    url: `https://www.omdbapi.com/?apikey=4d92fa51&s=${value}`,
  }).then(function (response) {
    console.log('response: ', response)
    setMovieList(response.data.Search ? response.data.Search : [])
  })
}
