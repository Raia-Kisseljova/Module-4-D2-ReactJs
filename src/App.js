import './App.css';
import horror from './Data/horror.json';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';
import DisplayRelease from './components/LatestRelease';
import CommentArea from './components/CommentArea';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookInfo from './components/BookDetail';
import Registration from './components/Registration';

function App() {

  const [showComments, setShowComments] = useState(false)

  // redux
  return (
    <Router>
      <MyNavbar />
      <Jumbo />
      <Switch>
        {showComments && <CommentArea />}
        <Route path='/'
          exact
          render={(routerProps) => (<DisplayRelease horrorProp={horror}  {...routerProps} />)}>
        </Route>

        <Route path='/register' exact render={() => <Registration name="Raissa" />} />

        <Route path='/about/' exact component={BookInfo} />
      </Switch>
      <Footer />
    </Router>
  )
}

// setShowComments={() => setShowComments(!showComments)}

export default App;
