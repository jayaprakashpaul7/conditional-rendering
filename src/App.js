import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state
    let authbutton
    if (isLoggedIn === true) {
      authbutton = <button>Logout</button>
    } else {
      authbutton = <button>Login</button>
    }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {authbutton}
      </div>
    )
  }
}

export default App
