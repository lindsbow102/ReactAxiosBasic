import React, { Component } from "react";
//import axios from "axios";

// var corsUrl = "https://cors-anywhere.herokuapp.com/";
// //var location = "Museum%20of%20Contemporary%20Art%20Australia";
// //var location = "Museum of Contemporary Art Australia";
// var key = "AIzaSyAF3KPheEYGJlRGxjAfHO6PFnRItaSvNwY";
// var API_URL =
//   "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
// const post_API_URL =
//   "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" +
//   key;

class GoogleMaps extends Component {
  // state = {
  //   arrayofids: [],
  //   info: [],
  //   q: ""
  // };

  // fetchData = () => {
  //   //const url = `${API_URL}${this.state.q}${post_API_URL}`;
  //   const url = `${corsUrl}${API_URL}${this.state.q}${post_API_URL}`;
  //   axios
  //     .get(url)
  //     .then(response => response.data)
  //     .then(data => {
  //       this.setState({
  //         info: data
  //       });
  //       console.log(data);
  //       //console.log(this.state.info);
  //       console.log(this.state.info.candidates);
  //       console.log(typeof(this.state.info));
  //       console.log(this.state.info.candidates[0].geometry.location.lat);
  //     });
  // };
  
  // //   componentDidMount() {
  // //     this.fetchData();
  // //   }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(event);
  //   this.fetchData();
  // };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">React Axios Google Maps</h1>
        {/*<form>
          <div className="form-group col-xs-7">
            <label htmlFor="Query">
              <strong>Location Search</strong>
            </label>
            <input
              className="form-control"
              id="Artist"
              type="text"
              value={this.state.q}
              placeholder="Search locations here"
              name="q"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <button
              onClick={this.handleFormSubmit}
              type="submit"
              className="btn btn-lg btn-danger"
            >
              Search
            </button>
          </div>
        </form>*/}

        <div className="container mt-10">
          <div className="col-xs-8">
          <h1>This will eventually hold Google Maps info</h1>
            {/*this.state.info.map(location => (
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Location: {location.candidates[0].name}</h5>
                </div>
              </div>
            ))*/}
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleMaps;
