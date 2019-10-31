import React from 'react';

class HogTile extends React.Component {

  render() {
    console.log(this.props.hog)
    return(
      <div className="ui eight wide column">
      <ul>
        <li><img src={null} alt={this.props.hog.name} /></li>
        <li> <h2> {this.props.hog.name} </h2> </li>
        <li>Specialty: {this.props.hog.specialty}</li>
        <li>Weight: {this.props.hog.weight}</li>

      </ul>
      </div>
    )
  }
}

export default HogTile;
