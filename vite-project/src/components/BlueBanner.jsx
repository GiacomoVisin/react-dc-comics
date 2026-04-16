import logo from "../assets/img/buy-comics-digital-comics.png"
import logo2 from "../assets/img/buy-comics-merchandise.png"
import logo3 from "../assets/img/buy-comics-subscriptions.png"
import logo4 from "../assets/img/buy-comics-shop-locator.png"
import logo5 from "../assets/img/buy-dc-power-visa.png"





function BlueBanner () {
    return(
        <div className="BlueBanner">
            <div className="container">
                <ul id="BlueList">
                    <li className="BlueImg"> <img src={logo}></img> </li>
                    <li className="text"><p>DIGITAL COMICS</p></li>
                    <li className="BlueImg"><img src={logo2}></img></li>
                    <li className="text"><p>DC MERCHANDISE</p></li>
                    <li className="BlueImg"><img src={logo3}></img></li>
                    <li className="text"><p>SUBSCRIPTION</p></li>
                    <li className="BlueImg"><img src={logo4}></img></li>
                    <li className="text"><p>COMIC SHOP LOCATOR</p></li>
                    <li className="BlueImg"><img src={logo5}></img></li>
                    <li className="text"><p>DC POWER VISA </p></li>
                </ul>
            </div>
        </div>
    )
}

export default BlueBanner