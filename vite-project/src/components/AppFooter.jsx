import logo from "../assets/img/footer-facebook.png"
import logo2 from "../assets/img/footer-twitter.png"
import logo3 from "../assets/img/footer-youtube.png"
import logo4 from "../assets/img/footer-pinterest.png"
import logo5 from "../assets/img/footer-periscope.png"


function AppFooter() {
    return (
        <div className="FooterBar">
            <div className="container">
                <div className="FlexFooter">
                    <div> <button className="BtnSignUp">SIGN UP NOW!</button></div>
                    <div>
                        <ul className="FooterList">
                            <li>  <p className="Pfooter">FOLLOW US</p>       </li>
                            <li>  <img src={logo}></img> </li>
                            <li>  <img src={logo2}></img> </li>
                            <li>  <img src={logo3}></img> </li>
                            <li>  <img src={logo4}></img> </li>
                            <li>  <img src={logo5}></img> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppFooter