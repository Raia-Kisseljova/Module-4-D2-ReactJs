import './App.css';
import horror from './Data/horror.json';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';
import DisplayRelease from './components/LatestRelease';
import CommentArea from './components/CommentArea';

function App() {
  return (
    <>
      <MyNavbar />
      <Jumbo />
      <CommentArea />
      <DisplayRelease horrorProp={horror} />

      <Footer />
    </>
  )
}

export default App;
