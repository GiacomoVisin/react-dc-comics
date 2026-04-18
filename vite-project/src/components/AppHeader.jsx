
import logo from "../assets/img/dc-logo.png"
import logo2 from "../assets/img/jumbotron.jpg"
import navbar from "../../dc-comics-2/navbar.js"



function AppHeader() {
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
                                <li key={element.id}> <a href={element.link} className={element.active ? "active" : ""}> {element.name} </a> </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </div>

        </>
    )
}

export default AppHeader