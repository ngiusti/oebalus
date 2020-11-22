import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from './store/actions'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './screens/home-screen/home-screen'
import Login from './screens/login-screen/login-screen'
import SessionType from './screens/session-type-screen/session-type-screen'
import Session from './screens/session-screen/session-screen'
import Data from './screens/data-screen/data-screen'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          this.props.onSetUser(this.state.currentUser)
        });
      }
      else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SessionType" component={SessionType} />
          <Route exact path="/Session" component={Session} />
          <Route exact path="/Data" component={Data} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
  return {
    onSetUser: (userData) => dispatch({ type: actionTypes.ADD_PLAYER, payload: userData }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
