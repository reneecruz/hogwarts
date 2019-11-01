import React from 'react';
import Filter from './Filter';
import Sort from './Sort';

class FilterBar extends React.Component {

  render(){
    // console.log(this.props)
    return (
      <div>
      <Filter handleFilter={this.props.handleFilter}/>
      <Sort handleSort={this.props.handleSort} />
      </div>
    )
  }
}

export default FilterBar;
