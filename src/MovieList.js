import React, { Component } from 'react'
import UserFavoriteList from './UserFavoriteList.js'

class MovieList extends Component {
  
  render() {
    const movies = this.props.movies;
    const profiles = this.props.profiles;
    const users = this.props.users;
    let isDisplayFavorites = this.props.isDisplayFavorites;
    //filter(profiles => profile.favoriteMovieID == movie.id)
    
    return ( 
      <div>
      {Object.entries(movies).map(([key,movie]) => (
          <li key={movie.id}>
                                  {movie.name}
  <h4>Liked By:</h4>
  								<UserFavoriteList movie={movie} profiles={profiles} users={users} />
  
          </li>
          ))}
      </div>
          )
		
	}
}

export default MovieList