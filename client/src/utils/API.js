import axios from "axios";
// const BASEURL = "https://rest.bandsintown.com/artists/";
// const APIKEY = "/events?app_id=codingbootcamp";
//const cors = "https://cors-anywhere.herokuapp.com/";

export default {
  searchOMDB: function(query) {
    return axios.get("/api/moviesearch", { params: { t: query } });
  },
  searchBands: function(artist) {
    return axios.get("/api/concertsearch", { params: { artist }});
  }
};
