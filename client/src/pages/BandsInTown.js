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
          <h1 className="text-center">React Axios Bands In Town</h1>
        <form>
          <div className="form-group col-xs-7">
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
              className="btn btn-lg btn-danger"
            >
              Search
            </button>
          </div>
        </form>

        <div className="container mt-10">
          <div className="col-xs-8">
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
      </div>
    );
  }
}
export default BandsInTown;
