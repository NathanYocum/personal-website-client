import React from 'react';
import NavBar from '../NavBar/NavBarComponent';

class Index extends React.Component{
  render() {
    return(
      
      <div>
        <NavBar/>
        <h1 className="welcome"> Nathan Yocum </h1>
        <p> Welcome to my website! </p>
      </div>
    );
  }
}

export default Index;