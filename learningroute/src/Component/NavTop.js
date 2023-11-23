import React from "react";
import {Link} from "react-router-dom";

function NavTop({mailto,label}){
    return(
        <div className="contact">
            <div>
            <h3>Leading Education Consultant In India</h3>
            </div>
           <div className="leftcontact" > 
           <Link>+91-9643575081      |</Link>
            <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        </div>
        </div>
    )
}

export default NavTop