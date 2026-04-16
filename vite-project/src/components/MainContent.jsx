import logo from "../assets/img/dc-logo-bg.png"


function MainContent() {
    return (
        <div className="bg">
            <div className="container">
                <div className="UlContainer">

                    <ul className="MainUl">
                        <li><h3 class="whiteH3">DC COMICS</h3></li>
                        <li>Characters</li>
                        <li>Comic</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos News</li>
                    </ul>

                    <ul className="MainUl">
                        <li><h3 class="whiteH3">DC</h3></li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy New</li>
                        <li>Ad Choises</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                        <li>Subscription</li>
                        <li>Talent WorkShops</li>
                        <li>CPSC certificates</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>
                    </ul>

                    <ul className="MainUl">
                        <li><h3 class="whiteH3">SITES</h3></li>
                        <li>DC</li>
                        <li>Mad Magazine</li>
                        <li>DC Kids</li>
                        <li>DC universe </li>
                        <li>DC Power Visa</li>
                    </ul>
                </div>

                <ul className="MainUl negativeMargin">
                    <li><h3 class="whiteH3">SHOP</h3></li>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>

                </ul>



                <img id="BgLogo" src={logo}></img>
            </div>
        </div>
    )
}


export default MainContent