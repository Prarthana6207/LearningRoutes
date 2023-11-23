import React from "react";
// import { Hamburger } from "./Hamburger";


function NavBar() {
 

  return (
    <div className="Navbar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMCymWwv5mhIXkGffWxsumoBE-2LMcKY3gTouyu56&s"
        alt=""
      />

      <div class="dropdown">
        <button class="dropbtn">Explore College</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
       
       {/* <div className="hamburger">
       <Hamburger />
       </div> */}
        
     

      {/* <select>
        <option value="/">Home</option>
        <option value="/">Our Course</option>
        <option value="/">Contact</option>
        <option value="/">Explore More</option>
      </select> */}

      <div className="lists">
        <ul>
          <li>
            <button class="dropli">Home |</button>
          </li>
          <li>
            <div className="dropdown">
              <button class="dropli">Our Courses |</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropli">Contact |</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropli">Explore More |</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="third">
        <button class="dropbtn" style={{ backgroundColor: "gray" }}>
          College Finder
        </button>
      </div>
    </div>
  );
}

export default NavBar;
