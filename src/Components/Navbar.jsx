import React, {useState} from "react";

const Navbar = () => {
    
    let [hide, sethide] =   useState(false);
    
    return(
        <>
          <header className= "flex bg-white-200 gap-24 justify-center w-full h-12 text-2xl font-medium shadow-md mb-8">
              <div><span className="text-purple-400">D</span>oc<span className= "text-purple-400">C</span>
              </div>
              <div>
                  <ul className= "flex gap-8 cursor-pointer">
                      <li> Home </li>
                      <li> About </li>
                      <li> Services </li>
                      
                  </ul>
              </div>
              <div>
                  <button className="text-white bg-red-500 rounded-md px-2" onClick = {() => sethide(hide)}>Sign in {hide} </button>
              </div>

          </header>
        </>
    );
}

export default Navbar;