import axios from "axios";
const BASEURL = "https://rest.bandsintown.com/artists/";
const APIKEY = "/events?app_id=codingbootcamp";
//const cors = "https://cors-anywhere.herokuapp.com/";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
    //return axios.get(cors + "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3");
  }
};
