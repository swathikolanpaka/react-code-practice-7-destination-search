// Write your code
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {

    const {destinationsList} = this.props

  state = {searchInput: '', finalDestinationList: destinationsList}

  render() {

    return <h1>Destination Search</h1>
  }
}

export default DestinationSearch
