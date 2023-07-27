// Write your code
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: '', finalDestinationList: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, finalDestinationList} = this.state

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

        <ul>
          {searchResult.map(eachPlace => (
            <DestinationItem
              destinationList={eachPlace.destinationList}
              key={eachPlace.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
