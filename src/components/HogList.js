import React from 'react';
import HogTile from './HogTile';

class HogList extends React.Component {

  render() {
    console.log(this.props.hogs)

    return(
      <div className="ui grid container">
          {
              this.props.hogs.map(hog => {
                  return <HogTile hog={hog} key={hog.id}/>
              })
          }
      </div>
    )
  }
}

export default HogList;
