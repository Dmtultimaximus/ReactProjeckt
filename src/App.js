import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login' 

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar />
        <div className="app-content">
          <Route path="/dialogs" render={ () =><DialogsContainer store={props.store} />} />
          <Route path='/profile/:userId?' render={ () =><ProfileContainer store={props.store} /> } />
          <Route path='/users' render={ ()=><UsersContainer/> }/>
          <Route path='/login' render={ ()=><Login/> }/>
          {/* <Profile/>
        <Dialogs /> */}
        </div>

      </div>
    </BrowserRouter>
  );
}



export default App;
