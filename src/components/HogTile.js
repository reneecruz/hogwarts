import React from 'react';

class HogTile extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    console.log("clicked")
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    // console.log(this.props.hog)

    let {name : hogName} = this.props.hog
    let slug = hogName.replace(/\s/g, "_").toLowerCase()

    const fileName = `../hog-imgs/${slug}.jpg`

    return(
      <div className="ui eight wide column" >


          <ul onClick={this.handleClick} >
          <div className="card">
            <li><img src={fileName}  alt={this.props.hog.name} /></li>
            <li> <h2> {this.props.hog.name} </h2> </li>
          </div>
          </ul>

          {this.state.clicked ?
          <ul>
            <div className="card">
              <li>Specialty: {this.props.hog.specialty}</li>
              <li>Weight: {this.props.hog.weight}</li>
              <li>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</li>
              <li>Greased: {`${this.props.hog.greased}`}</li>
            </div>
          </ul>
        : null
      }
      </div>
    )
  }
}

export default HogTile;
