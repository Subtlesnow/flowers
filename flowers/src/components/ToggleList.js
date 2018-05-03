import React from 'react'
import Data from '../data/Data'

export default class ToggleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Data
    }
  }

  render() {
    const {data} = this.state
    return (<div>
      {data.map(item => (<Contact item={item} key={item.id}/>))}
    </div>)
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  toggleContact = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const {item} = this.props
    return (<ul>
      <li key={item.id} onClick={() => this.toggleContact()}>
        <div>{item.first} {item.last}</div>
        {
          this.state.show &&
          <div>
            <div>{item.age}</div>
            <div>{item.location}</div>
            <div>{item.description}</div>
          </div>
        }
      </li>
    </ul>)
  }
}
