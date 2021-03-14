import React, { Component } from "react";
import "./filter.css";

export default class Filter extends Component {
  constructor(props){
    super(props)
    this.state={
      year:false
    }
  }
  render() {
    return (
      <div className="filter">
        <h1>Filters</h1>
        <div className="options-wrapper">
          <h2>Launch Year</h2>
          <div className="options">
            {this.props.years.map((year) => (
              <button
              // className={this.state.year?"active":''}
              value={year}
              name="year"
                onClick={(e) => {
                  this.props.handleFilterName(e.target.name, e.target.value);
                  e.target.style.backgroundColor='red';
                }}
               
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        <div className="options-wrapper">
          <h2>Success Launch</h2>
          <div className="options">
            <button
              onClick={(e) => {
                this.props.handleFilterName(e.target.name, e.target.value);
              }}
              value="true"
              name="launch"
            >
              True
            </button>
            <button
              onClick={(e) => {
                this.props.handleFilterName(e.target.name, e.target.value);
              }}
              value="false"
              name="launch"
            >
              False
            </button>
          </div>
        </div>
        <div className="options-wrapper">
          <h2>Success Landing</h2>
          <div className="options">
            <button
              onClick={(e) => {
                this.props.handleFilterName(e.target.name, e.target.value);
              }}
              value="true"
              name="landing"
            >
              True
            </button>
            <button
              onClick={(e) => {
                this.props.handleFilterName(e.target.name, e.target.value);
              }}
              value="false"
              name="landing"
            >
              False
            </button>
          </div>
        </div>
        <button className="clear" onClick={this.props.clear()}>Clear filter</button>
      </div>
    );
  }
}
