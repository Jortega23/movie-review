import React,{Component} from 'react';
import Navbar from './components/Navbar'
import Search from './components/Search'
import Movie from './components/Movie'
import axios from 'axios'
import './App.css';

const api_key = '8a623321e27662c5f09d64d0a64cd4f4'

class App extends Component {
  state = {
    movies: [],
    loading: false
  }


// Search Movies -------------------------------->
  searchMovies = async text =>{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${api_key}&query=${text}`);
    this.setState({movies: res.data.results})
    console.log(this.state.movies)
  }



  render(){
    return (
    <div className="App">
      <Navbar />
      <Search searchMovies={this.searchMovies}/>
      <Movie movies={this.state.movies}/>
    </div>
  );
}
}
export default App;
