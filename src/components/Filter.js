import React from 'react';

class Filter extends React.Component {

  render() {
    // console.log(this.props)
    return(
      <div className="filter">
      <label htmlFor="filter"> Greased ? </label>
      <input id="filter" type="checkbox" onClick={this.props.handleFilter}/>
      </div>
    )
  }
}

export default Filter;
