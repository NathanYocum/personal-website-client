import React from 'react';

class NavBar extends React.Component{
  render() {
    return(
      <ul>
        <nav>
          <li key="home"><a href="index">Home</a></li>
          <li key="users"><a href="users">Users</a></li>
        </nav>
      </ul>
    );
  }
}

export default NavBar;