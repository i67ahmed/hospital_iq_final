import React, { Component } from 'react';


class Header extends Component {
  render() {

    function myFunction() {
      var element = document.body;

      element.classList.toggle("dark-mode");
    }



    return (
     <div>
       <img src="https://www.hospiq.com/wp-content/uploads/2020/03/HospitalIQ-LOGO-small.png" width="230" height="47" alt="Hospital IQ Logo" data-retina_logo_url=""></img>
      <button onClick = {myFunction}>
       <i id="dark-mode-btn" className="toggler far fa-moon"></i>
      </button>
     </div>
    )
  }
}

export default Header;
