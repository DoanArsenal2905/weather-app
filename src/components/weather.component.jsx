import React, { Component } from 'react'
import "./weather.style.css";

export default class Weather extends Component {
  render() {
    return (
      <div className="container text-center text-light">
        <div className="Card">
          <h1 className="text-white py-3">{this.props.cityname}</h1>
          <h5 className="py-4">
            <i className={`wi ${this.props.weatherIcon} display-1`} />
          </h5>

          {this.props.temp_celsius ? (<h1 className="py-2">{this.props.temp_celsius}&deg;</h1>) : null}

          {this.maxminTemp(this.props.temp_min, this.props.temp_max)}

          <h4 className="py-3">
            {this.props.description.charAt(0).toUpperCase() + this.props.description.slice(1)}
          </h4>
        </div>
      </div>
    )
  }
  maxminTemp = (min, max) => {
    if (max && min) {
      return (
        <h3>
          <span className="px-4">{min}&deg;</span>
          <span className="px-4">{max}&deg;</span>
        </h3>
      );
    }
  }
}


