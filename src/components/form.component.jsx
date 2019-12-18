import React, { Component } from 'react'
import "./form.style.css"

export default class Form extends Component {
  render() {
    return (
      <div className="container h-100">
        <form onSubmit={this.props.loadweather}>
          <div>{this.props.error ? this.error() : ""}</div>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  error = props => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City and Country...!
      </div>
    );
  };
}
