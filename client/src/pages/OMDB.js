import React, { Component } from "react";
import moment from "moment";
import API from "../utils/API";

class BandsInTown extends Component {
  state = {
    info: [],
    q: ""
  };

  fetchData = query => {
    API.search(query)
      .then(res => {
        this.setState({ info: res.data })
        console.log(res.data);
        console.log(typeof(res.data));
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchData("clueless");
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event);
    this.fetchData(this.state.q);
  };

  render() {
    return (
      <div className="container">
          <h1 className="text-center">React Axios Movie Search</h1>
        <form>
          <div className="form-group col-xs-7">
            <label htmlFor="Query">
              <strong>Movie Search</strong>
            </label>
            <input
              className="form-control"
              id="Artist"
              type="text"
              value={this.state.q}
              placeholder="Search Movies"
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
        </form>
        <div className="container mt-10">
          <div className="col-xs-8">
          <div className="card text-center" key={this.state.info.Title}>
          
          <div className="card-body">
            <h4 className="card-title">{this.state.info.Title}</h4>
            <h5 className="card-subtitle">Year: {this.state.info.Year} | Rated: {this.state.info.Rated}</h5>
            <hr></hr>
            <img src={this.state.info.Poster}></img>            
            <hr></hr>
            <h6 className="card-subtitle">Plot: {this.state.info.Plot}</h6>
            <hr></hr>
            <h6 className="card-subtitle">Actors: {this.state.info.Actors}</h6>
          </div>
            {/*
                  <h6 className="card-subtitle mb-2">
                    Time: {moment(concerts.datetime).format("h:mm a")}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    Venue: {concerts.venue.name}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    Location: {concerts.venue.city}, {concerts.venue.country}
                  </h6>
                  <h6 className="card-subtitle mb-2">
                    <a href={concerts.url}>Link</a>
                  </h6>
                </div>
              </div>
            ))*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BandsInTown;