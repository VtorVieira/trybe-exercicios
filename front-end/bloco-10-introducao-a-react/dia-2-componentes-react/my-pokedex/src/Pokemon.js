import React from "react";
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { data: { name, type, averageWeight, image } } = this.props;
    return (
        <div className="info">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
          </div>
          <div><img src={image} alt={name} /></div>
        </div>
    )
  }
}

export default Pokemon
