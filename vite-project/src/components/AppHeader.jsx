
import logo from "../assets/img/dc-logo.png"
import logo2 from "../assets/img/jumbotron.jpg"
import NavbarComics from "./NavbarComics.jsx"



function AppHeader({navbar}) {
    return (
        <>
            <div className="container">
                <div className="containerFlex">
                    <div>
                        <img id="bannerLogo" src={logo}></img>
                    </div>
                    <div>
                        <ul id="list">
                            {navbar.map((element) => (
                               <NavbarComics key={element.id} element={element}/>
                            ))}
                        </ul>
                    </div>


                </div>
            </div>

        </>
    )
}

export default AppHeader