import React, { Component } from "react";
import API from "../utils/API";

class OMDB extends Component {
  state = {
    info: [],
    q: ""
  };

  fetchData = query => {
    API.searchOMDB(query)
      .then(res => {
        this.setState({ info: res.data });
        console.log(res.data);
        console.log(typeof res.data);
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
                <h5 className="card-subtitle">
                  Year: {this.state.info.Year} | Rated: {this.state.info.Rated}
                </h5>
                <hr />
                <img src={this.state.info.Poster} alt="Movie" />
                <hr />
                <h6 className="card-subtitle">Plot: {this.state.info.Plot}</h6>
                <hr />
                <h6 className="card-subtitle">
                  Actors: {this.state.info.Actors}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OMDB;
