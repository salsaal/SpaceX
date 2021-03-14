import axios from "axios";
import React, { Component } from "react";
import "./home.css";
import Card from "../../components/cards/card";
import Filter from "../../components/filter/filter"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      years:[],
      year:'',
      launch:'',
      landing:''
    };
  }

 async componentDidMount() {
   let array=[]
  await  axios.get("https://api.spacexdata.com/v3/launches?limit=100").then((res) =>
      this.setState({
        data: res.data,
      })
    );
    this.state.data.map(item=>{
      if(!(this.state.years.includes(item.launch_year)))
      {
        array.push(item.launch_year);
        this.setState({years:array})
      }
    })
    console.log(array)

  }
  handleFilter=()=>{
    this.state.data.forEach((item) => {
        if (
          this.state.year.length > 0 &&
          this.state.launch.length > 0 &&
          this.state.landing.length > 0
        ) {
          axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.state.launch}&land
          _success=${this.state.landing}&launch_year=${this.state.year}
          `).then(res=>{this.setState({data:res.data})})
        } else if (
          this.state.year.length > 0 &&
          this.state.launch.length == 0 &&
          this.state.landing.length == 0
        ) {
          axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${this.state.year}
          `).then(res=>{this.setState({data:res.data})})
        } 
        else if (
          this.state.year.length == 0 &&
          this.state.launch.length > 0 &&
          this.state.landing.length == 0
        ) {
          axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.state.launch}
          `).then(res=>{this.setState({data:res.data})})
        } 
        else if (
          this.state.year.length == 0 &&
          this.state.launch.length == 0 &&
          this.state.landing.length > 0
        ) {
          axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${this.state.landing}
          `).then(res=>{this.setState({data:res.data})})
        } 
        else if (
          this.state.year.length > 0 &&
          this.state.launch.length > 0 &&
          this.state.landing.length == 0
        ) {
          axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.state.launch}&launch_year=${this.state.year}
          `).then(res=>{this.setState({data:res.data})})
        } 
        else if (
          this.state.year.length == 0 &&
          this.state.launch.length > 0 &&
          this.state.landing.length > 0
        ) {
          axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.state.launch}&land_success=${this.state.landing}
          `).then(res=>{this.setState({data:res.data})})
        } 
        else if (
          this.state.year.length > 0 &&
          this.state.launch.length == 0 &&
          this.state.landing.length > 0
        ) {
          axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${this.state.launch}&launch_year=${this.state.year}
          `).then(res=>{this.setState({data:res.data})})
        } 
      })
  }
  clearFilter=()=>{
    axios.get("https://api.spacexdata.com/v3/launches?limit=100").then((res) =>
    this.setState({
      data: res.data,
    })
  );
  }
  render() {
    return (
      <div className="home">
        <h1 className="heading">Space X launch Programs</h1>
        <div className="container">  
        <Filter years={this.state.years} clear={this.clearFilter} handleFilterName={(stateName, value) => {
              console.log(stateName);
              console.log(value);
              this.setState({ [stateName]: value }, () => this.handleFilter());
            }}/>
      {this.state.data.length > 0 ? 
      (
        <div className="cardlist">   
        {this.state.data.map((item) => (
       <Card data={item} />
       
     ))}
        </div>
      )
   :(<h1>NO RESULTS</h1>)}
           
 
      </div>
      <h1 className="developer">Developed by : Salsaal Shahid</h1>
      </div>
  
    );
  }
}
