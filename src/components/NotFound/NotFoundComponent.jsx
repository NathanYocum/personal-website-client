import React from 'react';

const NotFound= () => (
  // Look into how the naming conventions for className
  <div className="not-found">
    <h1 id='oops'> Oops! </h1>
    <p> The page you are looking for can not be found! If this is an error,
      let <a href="https://github.com/NathanYocum"> Nathan </a> know, or raise an 
      <a href="https://github.com/NathanYocum/personal-website-client/issues"> issue</a>.
    </p>
  </div>
);

export default NotFound;