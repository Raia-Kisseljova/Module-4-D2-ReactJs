import './App.css';

import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';
import DisplayRelease from './components/LatestRelease';

function App() {
  return (
    <>
      <MyNavbar />
      <Jumbo />
      <DisplayRelease />
      <Footer />
    </>
  )
}

export default App;
