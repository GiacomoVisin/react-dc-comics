
import logo from "../assets/img/dc-logo.png"


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
                            <li> <a href="#">CHARACTERS</a> </li>
                            <li> <a href="#" id="blue"> COMICS </a></li>
                            <li>  <a href="#">MOVIES</a></li>
                            <li>  <a href="#">TV </a></li>
                            <li>  <a href="#">GAMES</a> </li>
                            <li>  <a href="#">COLLECTIBLES</a></li>
                            <li>  <a href="#">VIDEOS</a> </li>
                            <li>  <a href="#">FANS</a> </li>
                            <li>  <a href="#">NEWS </a></li>
                            <li> <a href="#">SHOP</a></li>
                        </ul>
                    </div>
                </div>
            </div>






        </>
    )
}

export default AppHeader