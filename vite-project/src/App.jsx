
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import BlackBar from './components/BlackBar'
import BlueBanner from './components/BlueBanner'
import Jumbotron from './components/jumbotron'
import MainContent from './components/MainContent'
import 'bootstrap/dist/css/bootstrap.min.css';

import comics from '../dc-comics-2/comics'
import navbar from '../dc-comics-2/navbar'






function App() {
  

  return (
    <>
       <AppHeader navbar= {navbar}/>
       <Jumbotron/> 
       <BlackBar comics= {comics}/>
       <BlueBanner/>
       <MainContent/>
       <AppFooter/>
    </>
  )
}

export default App
