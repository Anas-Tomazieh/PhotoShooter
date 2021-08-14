import { Router } from '@reach/router'
import './App.css';
import Main from './views/Main'
import Login from './components/sign/Login'
import Register from './components/sign/Register'
import CreatePhoto from './views/CreatePhoto'
import PhotographerDetail from './views/PhotographerDetail'
import PhotoDetails from './views/PhotoDetails'
import Header from './components/Header'
import Footer from './components/Footer'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import HomePage from './views/HomePage';
import back from './images/back.jpeg'
import CookieConsent from "react-cookie-consent";
import CreatComment from './views/CreatComment';
import Chatt from './components/Chatt';
import NotFound from './views/NotFound';

const style = {
  back: {
    backgroundImage: "url(" + back + ")",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"


  }
}

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App" style={style.back}>
      <Header />
      <Router >
        <Main path="/" />
        {user && user._id ? <HomePage path="/homepage" setLoginUser={setLoginUser} />
          : <Login path="/login" setLoginUser={setLoginUser} />}
        <Login path="/login" setLoginUser={setLoginUser} />
        <Register path="/register" />
        <PhotoDetails path="/photo/:idp" />
        <CreatePhoto path="/createPhoto/:idu" />
        < NotFound path="notfound" />
        <CreatComment path="/comment/:idp" />
        <PhotographerDetail path="/photographer/:id" />
        <Chatt path="/chat" />

      </Router>
      <Footer />
      <CookieConsent > This webSite use cookies</CookieConsent>
    </div>
  );
}

export default App;
