import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {userInput: '', userDetailsList: initialuserDetailsList}

  OnchangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    console.log(uniqueNo)
    const {userDetailsList} = this.state
    const filteredUserDetailsList = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredUserDetailsList})
  }

  render() {
    const {userInput, userDetailsList} = this.state
    console.log(userInput)
    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.includes(userInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="text" onChange={this.OnchangeInput} />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              uniqueNo={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
