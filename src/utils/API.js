import axios from "axios";

const queryURL = "https://api.themoviedb.org/3/search/multi?api_key="+ apiKey +"&language=en-US&query="+ query +"&page=1&include_adult=false";
const APIKEY = "d03fc0e64d561bfed0fdc80a54d08b43";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(queryURL);
  }
};
