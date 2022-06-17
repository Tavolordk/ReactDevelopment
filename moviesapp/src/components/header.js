
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-black mb-5">
                <div className="container-fluid">
                    <a style={{ color: "#FFF" }} className="navbar-brand" href="https://github.com/Tavolordk">
                        <FontAwesomeIcon icon={faTerminal} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">About me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}