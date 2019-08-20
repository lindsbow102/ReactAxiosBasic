import React, { Component } from "react";
import moment from "moment";
import API from "../utils/API";

class BandsInTown extends Component {
  state = {
    info: [],
    q: ""
  };

  fetchData = artist => {
    API.searchBands(artist)
      .then(res => {
        this.setState({ info: res.data });
        console.log(res.data);
        console.log(typeof res.data);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchData("pink");
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
        <h1 className="text-center">React Axios Concert Search</h1>
        <form>
          <div className="form-group col-xs-7">
            <label htmlFor="Query">
              <strong>Search for Concerts by Artist</strong>
            </label>
            <input
              className="form-control"
              id="Artist"
              type="text"
              value={this.state.q}
              placeholder="Search Artists"
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
      </div>
    );
  }
}
export default BandsInTown;
