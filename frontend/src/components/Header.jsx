import { Link } from "react-router";
import Headerbutton from "./Headerbutton";
import Logo from "./Logo";
import '../assets/style.css';


function Header() {
    return ( 
    <>

        <header className="sticky drop-shadow-xl/40 bg-huger-main-100 m-2 rounded-l-4xl flex flex-row-reverse font-fshahdad-display-bold">
            <div className="p-2 mr-2 w-20 flex items-center fill-huger-text">
                <Logo />
            </div>
            <span className="grow">
            </span>
            <nav className="w-auto">
                <Link to='خانه'>
                    <Headerbutton>خانه</Headerbutton>
                </Link>
                <Link to='گالری'>
                    <Headerbutton>گالری</Headerbutton>
                </Link>
                <Link to='طرح‌ها'>
                    <Headerbutton>طرح‌ها</Headerbutton>
                </Link>
            </nav>
        </header>

    </>
    );
}

export default Header;