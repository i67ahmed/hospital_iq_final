import React, { Component } from 'react';


class Header extends Component {
  render() {

    function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
    }

    return (
     <div>
       <img src= "..\assets\hospiq.logo.png" alt="Hospital IQ Logo"></img>
      <button onClick = {myFunction}>
        Toggle to Dark Mode
      </button>
     </div>
    )
  }
}

export default Header;
