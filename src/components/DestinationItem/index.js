// Write your code

import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="list-item">
      <img src={imgUrl} className="img" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
