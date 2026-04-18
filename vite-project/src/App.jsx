
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import BlackBar from './components/BlackBar'
import BlueBanner from './components/BlueBanner'
import Jumbotron from './components/jumbotron'
import MainContent from './components/MainContent'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  

  return (
    <>
       <AppHeader/>
       <Jumbotron/> 
       <BlackBar/>
       <BlueBanner/>
       <MainContent/>
       <AppFooter/>
    </>
  )
}

export default App
