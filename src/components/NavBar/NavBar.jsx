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

// const NavBar = () => {
//     return (
//         <nav class="navbar navbar-expand-lg col-12">
//         <div class="container-fluid">
//             <Logo class="col-4" />
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div class="navbar-nav">
//                     <a class="nav-link active" aria-current="page" href="#">Camisetas</a>
//                     <a class="nav-link" href="#">Pantalones</a>
//                     <a class="nav-link" href="#">Camperas</a>
//                     <a class="nav-link" href="#">Accesorios</a>
//                 </div>
//                 <CarritoWidget />
//             </div>
//         </div>
//         </nav>
//     )
// }

export default NavBar
