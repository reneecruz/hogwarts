import React, { Component} from 'react'

class Sort extends Component {

  render() {
    return (
      <div className="sort">
        <select  onChange={this.props.handleSort}>
          <option value="all">All</option>
          <option value="weight">Weight</option>
          <option value="name">Name</option>
        </select>
      </div>
    )

  }
}

export default Sort ;
