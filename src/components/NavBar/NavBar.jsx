import CarritoWidget from "../CarritoWidget/CarritoWidget"
import Logo from "../Logo/Logo"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <div className = "izquierda" >
                <Logo />
                <ul className="lista">
                    <li className="lista">Camisetas</li>
                    <li className="lista">Pantalones</li>
                    <li className="lista">Camperas</li>
                    <li className="lista">Accesorios</li>
                </ul>
                <CarritoWidget/>
            </div>
        </nav>
    )
}

export default NavBar
