import FooterNavBar from "./FooterNavBar"


function AppFooter({FooterBar}) {
    return (
        <div className="FooterBar">
            <div className="container">
                <div className="FlexFooter">
                    <div> <button className="BtnSignUp">SIGN UP NOW!</button></div>
                    <div>
                        <ul className="FooterList">
                            <li>  <p className="Pfooter">FOLLOW US</p>       </li>
                            {FooterBar.map((obj)=>(
                               <FooterNavBar key={obj.id} obj={obj}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppFooter