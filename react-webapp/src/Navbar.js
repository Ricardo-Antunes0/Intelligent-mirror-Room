import "./styles/Navbar.css";

export default function Navbar(){
    return  <nav className="nav">
        <a href="/" className="site-name">Intelligent Waiting Room</a>
        <ul>
            <li className="active">
                <a href="/about">about</a>
            </li>
        </ul>
    </nav>
}