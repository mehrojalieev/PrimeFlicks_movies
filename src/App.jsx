import './App.scss'
import Nav from './layout/nav/Nav';
import RouteController from './router/RouteController';
import Footer from './layout/footer/Footer';

function App() {

  return (
    <>
    <Nav/>  
    <RouteController/>
    <Footer/>
    </>
  )
}

export default App