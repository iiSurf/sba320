import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <nav>
                 {/* The path '/' aka HomePage to navigate to when the link is clicked. */}
                <Link to='/'>Home</Link>
            </nav>
        </header>
    )
}
export default NavBar;