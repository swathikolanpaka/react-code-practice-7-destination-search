// Write your code
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const text = event.target.value.toLowerCase()
    console.log(text)

    this.setState({
      searchInput: text,
    })
    // const text = searchInput.toLowerCase()
    // console.log(text)
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props

    const searchResult = destinationsList.filter(eachPlace =>
      eachPlace.name.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />

        <ul>
          {searchResult.map(eachPlace => (
            <DestinationItem destinationList={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
