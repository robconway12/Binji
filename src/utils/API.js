import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/search/multi?api_key="+ apiKey +"&language=en-US&query="+ query +"&page=1&include_adult=false";
const apiKey
var query

export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};
