import React, { Component } from 'react'

class UserFavoriteList extends Component {
  
  render() {
    const movie = this.props.movie;
    const profiles = this.props.profiles;
    const users = this.props.users;
    const applicableProfiles = profiles.filter(profile => profile.favoriteMovieID == movie.id);
    console.log("length of applicable", applicableProfiles.length);
    
    if (applicableProfiles.length > 0) {
		return ( 
      
          <ul>
      {applicableProfiles
       .map( favProfile => {
                                 const user = users[favProfile.userID];
                                   
                                     return(
                                       <li key={`${user.id}${movie.id}`}>
                                       {user.name}
                                       </li>
                                     )
                                    

                                 
                                 })}
      </ul>
          )
} else {
                                    return (<p> nobody likes</p>)
                                    }
	}
}

export default UserFavoriteList