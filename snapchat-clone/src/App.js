import React, { useEffect } from 'react';
import './App.css';
import WebCamCapture from './WebCamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import Chatview from './Chatview';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          userName: authUser.displayName,
          profilepic: authUser.photoURL,
          id: authUser.uid
        }))
      }
      else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img className="app__logo" src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png" />
            <div className="app__body">
              <div className="app__bodyBackground">
                <Switch>
                  <Route path="/chats/view">
                    <Chatview />
                  </Route>
                  <Route path="/chats">
                    <Chats />
                  </Route>
                  <Route path="/preview">
                    <Preview />
                  </Route>
                  <Route exact path="/">
                    <WebCamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
