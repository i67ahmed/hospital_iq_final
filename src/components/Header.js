import React, { Component } from 'react';


class Header extends Component {
  render() {

    //function that will allow users to change page to dark-mode and back
    function myFunction() {
      var element = document.body;

      element.classList.toggle("dark-mode");
    }



    return (
     <div className = "header-wrapper">
       <img src="https://www.hospiq.com/wp-content/uploads/2020/03/HospitalIQ-LOGO-small.png" width="230" height="47" alt="Hospital IQ Logo" data-retina_logo_url=""></img>
      <button onClick = {myFunction}>
       <i id="dark-mode-btn" className="toggler far fa-moon"></i>
      </button>
    </div>
    )
  }
}

export default Header;
