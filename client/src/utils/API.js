import axios from "axios";
// const BASEURL = "https://rest.bandsintown.com/artists/";
// const APIKEY = "/events?app_id=codingbootcamp";
//const cors = "https://cors-anywhere.herokuapp.com/";

export default {
  search: function(query) {
    // return axios.get("/events", { params: { q: query } });
    return axios.get("/api/concerts", { params: { t: query } });
  }
};
