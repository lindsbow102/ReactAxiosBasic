import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
const API_URL = "https://rest.bandsintown.com/artists/";
const post_API_URL = "/events?app_id=codingbootcamp";

class App extends Component {
  state = {
    info: [],
    q: ""
  };

  fetchData = () => {
    const url = `${API_URL}${this.state.q}${post_API_URL}`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          info: data
        });
        console.log(data);
        console.log(this.state.info);
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event.target.name);
    console.log(event.target.value);
    this.fetchData();
  };

  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>React Axios Example</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="Query">
              <strong>Artist Event Search</strong>
            </label>
            <input
              className="form-control"
              id="Artist"
              type="text"
              value={this.state.q}
              placeholder="Find Artist events here"
              name="q"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <button
              onClick={this.handleFormSubmit}
              type="submit"
              className="btn btn-lg btn-danger float-right"
            >
              Search
            </button>
          </div>
        </form>
        <div className="mt-3">
          {this.state.info.map(concerts => (
            <div className="card text-center" key={concerts.id}>
              <div className="card-body">
                <h5 className="card-title">Artist: {concerts.lineup}</h5>
                <h6 className="card-subtitle mb-2">
                  Date: {moment(concerts.datetime).format("MMM DD, YYYY")}
                </h6>
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
          ))}
        </div>
      </div>
    );
  }
}
export default App;
