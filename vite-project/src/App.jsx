
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import BlackBar from './components/BlackBar'
import BlueBanner from './components/BlueBanner'
import Jumbotron from './components/jumbotron'
import MainContent from './components/MainContent'
import 'bootstrap/dist/css/bootstrap.min.css';

// js for comics in the blackbar
import comics from '../dc-comics-2/comics'

// js for the navbar in the header
import navbar from '../dc-comics-2/navbar'

// js for the footerBar in the Footer
import FooterBar from '../dc-comics-2/FooterBar'


// image for bluebanner //
import logo from "./assets/img/buy-comics-digital-comics.png"
import logo2 from "./assets/img/buy-comics-merchandise.png"
import logo3 from "./assets/img/buy-comics-subscriptions.png"
import logo4 from "./assets/img/buy-comics-shop-locator.png"
import logo5 from "./assets/img/buy-dc-power-visa.png"



function App() {
  

  return (
    <>
       <AppHeader navbar= {navbar}/>
       <Jumbotron/> 
       <BlackBar comics= {comics}/>
       <BlueBanner logo={logo} logo2={logo2} logo3={logo3} logo4={logo4} logo5={logo5} />
       <MainContent/>
       <AppFooter FooterBar ={FooterBar}/>
    </>
  )
}

export default App
