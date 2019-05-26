import axios from "axios";
const BASEURL = "https://rest.bandsintown.com/artists/";
const APIKEY = "/events?app_id=codingbootcamp";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
      }
};
//   const url = `${API_URL}${this.state.q}${post_API_URL}`;
  //   axios
  //     .get(url)
  //     .then(response => response.data)
  //     .then(data => {
  //       this.setState({
  //         info: data
  //       });
  //       console.log(data);
  //       console.log(this.state.info);
  //     });