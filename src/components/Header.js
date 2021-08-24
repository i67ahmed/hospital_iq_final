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
       <i id="dark-mode-btn" className="toggler far fa-moon"></i>
      </button>
     </div>
    )
  }
}

export default Header;
