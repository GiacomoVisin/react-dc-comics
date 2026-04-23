





function BlueBanner ({logo, logo2, logo3, logo4, logo5} ) {
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