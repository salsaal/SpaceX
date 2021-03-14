import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  render() {
    // console.log(this.props.data.launch_success);
    return (
      <div className="card">
        <img src={this.props.data.links.mission_patch_small} alt="" />
        <h4 className="name">{this.props.data.mission_name}</h4>
        <h4>Mission id: </h4>
        {this.props.data.mission_id.length > 0 ? (
          <ul>
            {this.props.data.mission_id.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : (
          <span>Null</span>
        )}

        <h4>
          Launch Year : <span>{this.props.data.launch_year}</span>
        </h4>
        <h4>
          Succesful Launch :<span>{`${this.props.data.launch_success}`}</span>
        </h4>
        <h4>
          Succesful landing :<span>{`${this.props.data.upcoming}`}</span>
        </h4>
      </div>
    );
  }
}
