import "./styles/Navbar.css";
import React from "react";

export default function Navbar(){
    return  <nav className="nav">
        <a href="/" className="site-name">Intelligent Mirror Room</a>
        <ul>
            <li className="active">
                <a href="/about">about</a>
            </li>
        </ul>
    </nav>
}